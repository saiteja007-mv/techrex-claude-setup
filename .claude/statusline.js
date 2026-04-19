#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  gray: '\x1b[90m'
};

// Data file for tracking token usage
const DATA_FILE = path.join(os.homedir(), '.claude', 'statusline-data.json');

// Token limits (based on Claude Code limits)
const MONTHLY_TOKEN_LIMIT = 500000; // 500K tokens per month
const WEEKLY_TOKEN_LIMIT = 200000;  // 200K tokens per week (estimated)

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      return data;
    }
  } catch (e) {
    // Ignore errors, will create new data
  }
  return {
    sessions: [],
    monthlyTokens: 0,
    weeklyTokens: 0,
    lastMonthReset: new Date().toISOString(),
    lastWeekReset: new Date().toISOString()
  };
}

function writeData(data) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    // Ignore write errors
  }
}

function resetIfNeeded(data) {
  const now = new Date();
  const lastMonthReset = new Date(data.lastMonthReset);
  const lastWeekReset = new Date(data.lastWeekReset);

  // Reset monthly counter (30 days)
  const monthDiff = (now - lastMonthReset) / (1000 * 60 * 60 * 24);
  if (monthDiff >= 30) {
    data.monthlyTokens = 0;
    data.lastMonthReset = now.toISOString();
  }

  // Reset weekly counter (7 days)
  const weekDiff = (now - lastWeekReset) / (1000 * 60 * 60 * 24);
  if (weekDiff >= 7) {
    data.weeklyTokens = 0;
    data.lastWeekReset = now.toISOString();
  }

  return data;
}

function formatTokens(tokens) {
  if (tokens >= 1000000) {
    return (tokens / 1000000).toFixed(1) + 'M';
  } else if (tokens >= 1000) {
    return (tokens / 1000).toFixed(1) + 'K';
  }
  return tokens.toString();
}

function formatPercentage(value, limit) {
  const percentage = (value / limit * 100);
  return percentage.toFixed(1) + '%';
}

function getPercentageColor(percentage) {
  if (percentage < 50) return colors.green;
  if (percentage < 75) return colors.yellow;
  return colors.red;
}

function shortenPath(fullPath) {
  // On Windows, show drive and folder name if deep
  const parts = fullPath.split(path.sep).filter(p => p);
  if (parts.length <= 2) {
    return fullPath;
  }
  // Show first part (drive on Windows) and last part (current dir)
  return parts[0] + path.sep + '...' + path.sep + parts[parts.length - 1];
}

async function main() {
  try {
    // Read JSON input from stdin
    const input = await new Promise((resolve, reject) => {
      let data = '';
      process.stdin.on('data', chunk => data += chunk);
      process.stdin.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      process.stdin.on('error', reject);
    });

    // DEBUG: Write input to log file to see what we're receiving
    const logFile = path.join(os.homedir(), '.claude', 'statusline-debug.json');
    try {
      fs.writeFileSync(logFile, JSON.stringify(input, null, 2));
    } catch (e) {
      // Ignore
    }

    // Extract information from input
    const currentDir = input.workspace?.current_dir || process.cwd();
    const modelName = input.model?.display_name || input.model?.id || 'Unknown';
    const sessionCost = input.cost?.total_cost_usd || 0;
    const sessionId = input.session_id || '';
    const exceedsTokens = input.exceeds_200k_tokens || false;

    // Estimate tokens from cost (rough approximation)
    // Sonnet 4.5: ~$3-15 per 1M tokens (average ~$9 per 1M tokens)
    const estimatedTokens = Math.round((sessionCost / 9) * 1000000);

    // Read and update tracking data
    let data = readData();
    data = resetIfNeeded(data);

    // Update session tokens
    const existingSession = data.sessions.find(s => s.id === sessionId);
    if (existingSession) {
      const tokenDiff = estimatedTokens - existingSession.tokens;
      if (tokenDiff > 0) {
        data.monthlyTokens += tokenDiff;
        data.weeklyTokens += tokenDiff;
        existingSession.tokens = estimatedTokens;
      }
    } else if (sessionId) {
      data.sessions.push({
        id: sessionId,
        tokens: estimatedTokens,
        timestamp: new Date().toISOString()
      });
      data.monthlyTokens += estimatedTokens;
      data.weeklyTokens += estimatedTokens;
    }

    // Clean up old sessions (keep last 100)
    if (data.sessions.length > 100) {
      data.sessions = data.sessions.slice(-100);
    }

    writeData(data);

    // Calculate percentages
    const sessionPercentage = (estimatedTokens / MONTHLY_TOKEN_LIMIT * 100);
    const monthlyPercentage = (data.monthlyTokens / MONTHLY_TOKEN_LIMIT * 100);
    const weeklyPercentage = (data.weeklyTokens / WEEKLY_TOKEN_LIMIT * 100);

    // Format directory path
    const shortPath = shortenPath(currentDir);

    // Build status line
    const parts = [];

    // 1. Current directory
    parts.push(`${colors.cyan}${shortPath}${colors.reset}`);

    // 2. Model name
    parts.push(`${colors.blue}${modelName}${colors.reset}`);

    // 3. Session tokens (estimated) and cost
    const sessionColor = getPercentageColor(sessionPercentage);
    parts.push(`${colors.gray}Session:${colors.reset} ${sessionColor}${formatTokens(estimatedTokens)}${colors.reset} ${colors.gray}($${sessionCost.toFixed(4)})${colors.reset}`);

    // 4. Session percentage
    parts.push(`${sessionColor}${sessionPercentage.toFixed(1)}%${colors.reset}`);

    // 5. Monthly percentage
    const monthlyColor = getPercentageColor(monthlyPercentage);
    parts.push(`${colors.gray}Month:${colors.reset} ${monthlyColor}${monthlyPercentage.toFixed(1)}%${colors.reset}`);

    // 6. Weekly percentage
    const weeklyColor = getPercentageColor(weeklyPercentage);
    parts.push(`${colors.gray}Week:${colors.reset} ${weeklyColor}${weeklyPercentage.toFixed(1)}%${colors.reset}`);

    // Output the status line
    console.log(parts.join(`${colors.gray} | ${colors.reset}`));

  } catch (error) {
    // Fallback minimal output on error
    console.log(`${colors.cyan}${process.cwd()}${colors.reset} ${colors.gray}|${colors.reset} ${colors.blue}Claude${colors.reset}`);
  }
}

main();
