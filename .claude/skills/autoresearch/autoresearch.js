#!/usr/bin/env node
/**
 * AutoResearch Skill - Generic GPU-based autonomous research
 * For any research task, not just InstallPilot
 */

const fs = require('fs');
const path = require('path');

const AUTORESEARCH_DIR = path.join(process.env.HOME, 'autoresearch');

function showSetupGuide() {
  console.log('🔬 AutoResearch - GPU Setup Guide');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('Run autonomous AI research on your GPU-enabled device.');
  console.log('');
  console.log('Prerequisites:');
  console.log('  ✓ NVIDIA GPU with CUDA');
  console.log('  ✓ Python 3.10+');
  console.log('  ✓ CUDA toolkit');
  console.log('  ✓ OpenAI API key');
  console.log('');
  console.log('Setup:');
  console.log('');
  console.log('1. Clone autoresearch:');
  console.log('   git clone https://github.com/karpathy/autoresearch.git ~/autoresearch');
  console.log('');
  console.log('2. Install dependencies:');
  console.log('   cd ~/autoresearch && pip install -e .');
  console.log('');
  console.log('3. Run prepare:');
  console.log('   python prepare.py');
  console.log('');
  console.log('4. Create your program.md:');
  console.log('   nano ~/autoresearch/program.md');
  console.log('');
  console.log('5. Start research:');
  console.log('   export OPENAI_API_KEY=sk-...');
  console.log('   python train.py');
  console.log('');
}

function showExamplePrograms() {
  console.log('🔬 Example Research Programs');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('Save these to ~/autoresearch/program.md');
  console.log('');
  console.log('--- Example 1: Software Architecture ---');
  console.log(`
# Architecture Research

## Goal
Design system architecture for handling diverse components

## Approach
- Analyze different patterns
- Design detection system
- Create taxonomy

## Success Criteria
- Accurate classification
- Correct strategies
- Cross-platform support
`);
  console.log('');
  console.log('--- Example 2: Algorithm Optimization ---');
  console.log(`
# Optimization Research

## Goal
Optimize algorithm performance

## Approach
- Try different approaches
- Benchmark results
- Profile bottlenecks

## Success Criteria
- Faster than baseline
- Memory efficient
- Stable results
`);
  console.log('');
  console.log('--- Example 3: ML Model Search ---');
  console.log(`
# Model Architecture Search

## Goal
Find optimal neural network architecture

## Approach
- Modify layers
- Try different configs
- Test on validation

## Success Criteria
- Higher accuracy
- Reasonable training time
- Good generalization
`);
}

function showMonitorCommands() {
  console.log('🔬 Monitoring Commands');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('Check status:');
  console.log('   ps aux | grep train.py');
  console.log('   nvidia-smi');
  console.log('');
  console.log('View logs:');
  console.log('   tail -f ~/autoresearch/logs/*.txt');
  console.log('');
  console.log('View progress:');
  console.log('   eog ~/autoresearch/progress.png    # Linux');
  console.log('   open ~/autoresearch/progress.png   # macOS');
  console.log('');
  console.log('Copy results:');
  console.log('   mkdir -p ~/research-results');
  console.log('   cp ~/autoresearch/progress.png ~/research-results/');
  console.log('   cp -r ~/autoresearch/logs ~/research-results/');
}

function showHelp() {
  console.log('🔬 AutoResearch - Autonomous AI Research');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('Commands:');
  console.log('  /autoresearch setup    - Setup guide');
  console.log('  /autoresearch examples - Example research programs');
  console.log('  /autoresearch monitor  - Monitoring commands');
  console.log('  /autoresearch help     - This help');
  console.log('');
  console.log('What it does:');
  console.log('  AI agent that experiments autonomously on your GPU');
  console.log('  Modifies → Tests → Evaluates → Keeps/Discards → Repeats');
  console.log('');
  console.log('Use for:');
  console.log('  • Software architecture design');
  console.log('  • Algorithm optimization');
  console.log('  • ML model architecture search');
  console.log('  • Any code/experiment research');
}

// Main
const command = process.argv[2] || 'help';

switch (command) {
  case 'setup':
    showSetupGuide();
    break;
  case 'examples':
    showExamplePrograms();
    break;
  case 'monitor':
    showMonitorCommands();
    break;
  case 'help':
  default:
    showHelp();
    break;
}
