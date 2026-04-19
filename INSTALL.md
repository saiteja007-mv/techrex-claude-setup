# Manual install (no AI agent)

Fastest path is [AGENT_PROMPT.md](./AGENT_PROMPT.md) — hand it to any
coding agent and you're done in a minute. If you want to do it by hand,
follow the steps below. Takes ~10 minutes.

All paths below assume:

- Linux / macOS: `~/.claude`
- Windows (Git Bash): `~/.claude`
- Windows (PowerShell / cmd): `%USERPROFILE%\.claude`

## 0. Prerequisites

- Claude Code CLI installed — https://docs.claude.com/en/docs/claude-code
- `git` on PATH
- `node` + `npx` on PATH (for ccstatusline + search-console MCP)

## 1. Back up your existing config

```bash
cp -r ~/.claude ~/.claude.bak-$(date +%s)
```

## 2. Clone this repo

```bash
git clone https://github.com/saiteja007-mv/techrex-claude-setup.git
cd techrex-claude-setup
```

## 3. Copy the scaffold

Copy the `.claude/` subtree into your home, **without overwriting** what's
already there:

```bash
# Linux / macOS / Git Bash
cp -rn .claude/CLAUDE.md  ~/.claude/CLAUDE.md
cp -rn .claude/rules      ~/.claude/
cp -rn .claude/skills     ~/.claude/
cp -rn .claude/agents     ~/.claude/
cp -rn .claude/commands   ~/.claude/
```

`cp -n` = "no-clobber", skips files that already exist. Good default. If
you already have a `CLAUDE.md`, see step 4 to merge instead.

```powershell
# PowerShell equivalent
robocopy .\.claude $env:USERPROFILE\.claude /E /XC /XN /XO
```

## 4. Merge CLAUDE.md (if you already have one)

If `~/.claude/CLAUDE.md` already exists, **append** the bundle's content
to the end of your existing file between markers:

```markdown
# === BEGIN TechRex Bundle ===

<paste the entire content of .claude/CLAUDE.md from this repo>

# === END TechRex Bundle ===
```

This keeps your existing rules intact and lets you remove the bundle
cleanly later by deleting everything between the markers.

## 5. Merge settings.json

The template is `.claude/settings.json.template`. Copy the relevant keys
into your existing `~/.claude/settings.json`:

- `enabledPlugins`   — merge (don't flip any you've already disabled)
- `extraKnownMarketplaces` — merge by key
- `hooks.PreToolUse` — append the graphify matcher (or leave it off)
- `permissions.allow` — union of entries
- `statusLine`, `autoUpdatesChannel`, `skipDangerousModePermissionPrompt`
  — keep yours if already set, otherwise copy from template

Do NOT copy the top-level `_NOTE` key — strip it when you paste.

## 6. Merge config.json (MCP servers)

Template: `.claude/config.json.template`. Add the two MCP servers to
your existing `~/.claude/config.json`:

```json
{
  "mcpServers": {
    "search-console": { "command": "npx", "args": ["-y", "search-console-mcp"] },
    "n8n-mcp": {
      "command": "node",
      "args": ["<YOUR_N8N_MCP_DIST_PATH>"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "<YOUR_N8N_API_URL>",
        "N8N_API_KEY": "<YOUR_N8N_API_KEY>"
      }
    }
  }
}
```

Skip `n8n-mcp` entirely if you don't run n8n. `search-console` is optional
too — it'll prompt for Google OAuth on first use.

## 7. Install plugins

Open a Claude Code session and run each of these:

```
/plugin install document-skills@ando-marketplace
/plugin install frontend-design@claude-plugins-official
/plugin install n8n-mcp-skills@n8n-mcp-skills
/plugin install apify-ultimate-scraper@apify-agent-skills
/plugin install rust-analyzer-lsp@claude-plugins-official
/plugin install hugging-face-cli@huggingface-skills
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
/plugin install marketing-skills@marketingskills
/plugin install codex@openai-codex
/plugin install claude-mem@thedotmack
```

## 8. (Optional) statusline

```bash
cp .claude/statusline.bat ~/.claude/
cp .claude/statusline.js  ~/.claude/
```

Template's `statusLine` entry already points at `npx -y ccstatusline@latest`
so no extra config needed.

## 9. Verify

```bash
ls ~/.claude/skills   | wc -l    # >= 18
find ~/.claude/agents   -name '*.md' | wc -l   # >= 10
find ~/.claude/commands -name '*.md' | wc -l   # >= 57
grep -c "Caveman Mode" ~/.claude/CLAUDE.md      # >= 1
```

Open a fresh terminal and run `claude`. Type `/plugin` — you should see
10 plugins listed.

## Removing the bundle later

- Skills, agents, commands: delete the copied directories/files.
- CLAUDE.md: delete everything between the `=== BEGIN/END TechRex Bundle ===` markers.
- Plugins: `/plugin uninstall <slug>` for each.
- MCP servers: remove the `search-console` and `n8n-mcp` entries from `config.json`.
