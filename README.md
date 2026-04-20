# TechRex Claude Code Setup

> My entire Claude Code config, exported as a drop-in bundle. Hand the
> [agent prompt](./AGENT_PROMPT.md) to any coding agent (Claude Code,
> Cursor, Codex) and it installs everything onto your machine.

Daily-driven Claude Code configuration condensed into one repo:

| Category       | Count | What it is                                              |
|----------------|-------|---------------------------------------------------------|
| Global rules   | 1     | `CLAUDE.md` (Caveman + RTK + graphify)                  |
| Plugins        | 11    | Marketplace plugins, installed via `/plugin install`    |
| Custom skills  | 17    | `~/.claude/skills/` — autoresearch, graphify, …         |
| Agents         | 6     | Specialist sub-agents (blog writer, QA, fullstack, …)   |
| Slash commands | 29    | `gsd/*` (26), `vibe-*` (3)                              |
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
Reserved for project-specific rules you add later. The previous
`ccg-*.md` rules were removed along with the CCG skill — the
`superpowers` plugin now provides TDD / debugging / verification
discipline, so dedicated CCG rules were redundant.

### `.claude/skills/` (17)
`autoresearch` · `caveman` · `data-analyst` · `data-storytelling`
· `design-system` · `exploratory-data-analysis` · `gmaps-scraper` ·
`graphify` · `kpi-dashboard-design` · `linkedin-profile-search` ·
`prompt-refine` · `seedance` · `senior-data-scientist` ·
`skill-development` · `social-media` · `sql-optimization-patterns` ·
`youtube-content-generator`

### `.claude/agents/` (6)
Root specialist agents — `blog-writer-expert`, `comprehensive-qa-tester`,
`fullstack-expert`, `system-troubleshooter`, `ui-ux-design-expert`,
`youtube-content-strategist`.

### `.claude/commands/` (29)
- `gsd/*` — 26 commands for the GSD / "Get Shit Done" workflow.
- `vibe-*` — 3 free-form vibe commands.

### `.claude/settings.json.template`
Merge this into your `~/.claude/settings.json`. Enables 11 plugins, wires
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

## Plugins installed (11)

| Slug | Marketplace | Purpose |
|---|---|---|
| `superpowers` | `claude-plugins-official` | TDD, debugging, process-discipline skills |
| `document-skills` | `ando-marketplace` | PDF, DOCX, XLSX skills |
| `frontend-design` | `claude-plugins-official` | Design-system helpers |
| `n8n-mcp-skills` | `n8n-mcp-skills` | n8n workflow skills |
| `apify-ultimate-scraper` | `apify-agent-skills` | Web scraping |
| `rust-analyzer-lsp` | `claude-plugins-official` | Rust LSP integration |
| `hugging-face-cli` | `huggingface-skills` | HF model/dataset ops |
| `ui-ux-pro-max` | `ui-ux-pro-max-skill` | UI/UX design skills |
| `marketing-skills` | `marketingskills` | Marketing + SEO content |
| `codex` | `openai-codex` | OpenAI Codex integration |
| `claude-mem` | `thedotmack` | Persistent memory |

**Optional plugins** (not pre-wired — install manually if you have their
marketplace registered): `browser-use` (web automation), `career-ops`,
standalone `seo` plugin. These are listed as TODOs by the agent prompt
so you can add them yourself with `/plugin install <name>@<marketplace>`.

---

## Safety

- **No secrets in this repo.** Settings / config files are `*.template`
  with placeholders. My real `settings.json` and `config.json` are
  `.gitignore`-d and never pushed.
- **Non-destructive install.** The agent prompt + manual install both
  back up `~/.claude` first and use copy-if-not-exists semantics. Your
  existing skills/agents/commands are never overwritten.
- **Plugins are user-space.** All 11 are public marketplace plugins;
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
