# TechRex Claude Code Setup

> My entire Claude Code config, exported as a drop-in bundle. Hand the
> [agent prompt](./AGENT_PROMPT.md) to any coding agent (Claude Code,
> Cursor, Codex) and it installs everything onto your machine.

8 months of daily use of Claude Code condensed into one repo:

| Category       | Count | What it is                                              |
|----------------|-------|---------------------------------------------------------|
| Global rules   | 3     | `CLAUDE.md` (Caveman + RTK + graphify) + 2 rules files  |
| Plugins        | 10    | Marketplace plugins, installed via `/plugin install`    |
| Custom skills  | 18    | `~/.claude/skills/` — autoresearch, graphify, ccg, …    |
| Agents         | 10    | Specialist sub-agents (blog writer, QA, fullstack, …)   |
| Slash commands | 57    | `ccg/*` (28), `gsd/*` (26), `vibe-*` (3)                |
| Hooks          | 1     | PreToolUse Glob\|Grep → graphify reminder               |
| MCP server stubs | 2   | `search-console` + `n8n-mcp` templates (no secrets)     |
| Statusline     | —     | ccstatusline launcher scripts                           |

Everything is **scrubbed**: no API keys, no OAuth tokens, no JWTs, no ngrok
URLs, no email addresses. You configure your own after install.

---

## Install

### Option A — hand it to an AI agent (recommended, ~1 min)

1. Open [AGENT_PROMPT.md](./AGENT_PROMPT.md).
2. Copy the fenced block and paste it into Claude Code / Cursor / Codex.
3. The agent backs up your existing `~/.claude/`, clones this repo,
   merges files non-destructively, installs plugins, and prints a
   verification table.

### Option B — manual

See [INSTALL.md](./INSTALL.md) for the step-by-step walkthrough. Takes
about 10 minutes.

---

## What's inside

### `.claude/CLAUDE.md`
Global instructions loaded by Claude Code in every session. Three sections:

- **Caveman Mode** — terse responses (drop articles, filler, hedging).
  Technical substance stays exact.
- **RTK (Rust Token Killer)** — prefix commands with `rtk` for 60–90 %
  token savings on common outputs (`rtk git status`, `rtk vitest run`,
  etc). https://github.com/rust-token-killer
- **graphify reference** — pointer to the knowledge-graph skill.

### `.claude/rules/`
- `ccg-fast-context.md` — when to use `mcp__fast-context__fast_context_search` vs Grep / Read / Glob.
- `ccg-skills.md` — auto-trigger rules for CCG quality-gate skills.

### `.claude/skills/` (18)
`autoresearch` · `caveman` · `ccg` · `data-analyst` · `data-storytelling`
· `design-system` · `exploratory-data-analysis` · `gmaps-scraper` ·
`graphify` · `kpi-dashboard-design` · `linkedin-profile-search` ·
`prompt-refine` · `seedance` · `senior-data-scientist` ·
`skill-development` · `social-media` · `sql-optimization-patterns` ·
`youtube-content-generator`

### `.claude/agents/` (10)
Root specialist agents — `blog-writer-expert`, `comprehensive-qa-tester`,
`fullstack-expert`, `system-troubleshooter`, `ui-ux-design-expert`,
`youtube-content-strategist`.
CCG workflow agents (`agents/ccg/`) — `get-current-datetime`,
`init-architect`, `planner`, `ui-ux-designer`.

### `.claude/commands/` (57)
- `ccg/*` — 28 commands for the CCG workflow (plan, verify, doc-sync, orchestrate).
- `gsd/*` — 26 commands for the GSD / "Get Shit Done" workflow.
- `vibe-*` — 3 free-form vibe commands.

### `.claude/settings.json.template`
Merge this into your `~/.claude/settings.json`. Enables 10 plugins, wires
the graphify PreToolUse hook, sets `acceptEdits` as the default permission
mode, and points `statusLine` at `ccstatusline`.

### `.claude/config.json.template`
Merge into `~/.claude/config.json`. Stubs for the `search-console` MCP
(OAuth on first run) and the `n8n-mcp` server (replace placeholders with
your own n8n URL + API key + dist path).

### `.claude/statusline.bat` + `statusline.js`
Launchers for [ccstatusline](https://github.com/rfp-one/ccstatusline).
Optional — opt in via the agent prompt or copy manually.

---

## Plugins installed (10)

| Slug | Marketplace | Purpose |
|---|---|---|
| `document-skills` | `ando-marketplace` | PDF, DOCX, XLSX skills |
| `frontend-design` | `claude-plugins-official` | Design-system helpers |
| `n8n-mcp-skills` | `n8n-mcp-skills` | n8n workflow skills |
| `apify-ultimate-scraper` | `apify-agent-skills` | Web scraping |
| `rust-analyzer-lsp` | `claude-plugins-official` | Rust LSP integration |
| `hugging-face-cli` | `huggingface-skills` | HF model/dataset ops |
| `ui-ux-pro-max` | `ui-ux-pro-max-skill` | UI/UX design skills |
| `marketing-skills` | `marketingskills` | Marketing content |
| `codex` | `openai-codex` | OpenAI Codex integration |
| `claude-mem` | `thedotmack` | Persistent memory |

---

## Safety

- **No secrets in this repo.** Settings / config files are `*.template`
  with placeholders. My real `settings.json` and `config.json` are
  `.gitignore`-d and never pushed.
- **Non-destructive install.** The agent prompt + manual install both
  back up `~/.claude` first and use copy-if-not-exists semantics. Your
  existing skills/agents/commands are never overwritten.
- **Plugins are user-space.** All 10 are public marketplace plugins;
  `/plugin uninstall <slug>` removes any of them cleanly.
- **Open source.** MIT-licensed. Fork it, cut what you don't like, add
  what you do.

---

## Source

Curated by [**TechRex**](https://www.youtube.com/@The_TechRex) — AI
coding agent tutorials for developers.

- Website: https://techrex.saitejamothukuri.com
- YouTube: https://www.youtube.com/@The_TechRex
- Issues / PRs welcome.

## License

[MIT](./LICENSE)
