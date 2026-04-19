---
name: gmaps-scraper
description: Scrape business data from Google Maps (name, address, phone, website, reviews, hours, type, intro) using Playwright. Outputs CSV. Trigger when user asks to scrape Google Maps, pull local businesses, build a leads list from Maps, or extract Maps listings for a query + location.
---

# Google Maps Scraper

Python + Playwright scraper for Google Maps business listings. Based on https://github.com/zohaibbashir/Google-Maps-Scrapper.

## When to invoke

User says:
- "scrape Google Maps for <query>"
- "get <business type> in <city>"
- "pull leads from Maps"
- "build a list of <X> near <Y>"
- any extraction task that names Google Maps as the source

## Prerequisites (check first)

Before running:

```powershell
python --version          # need 3.8-3.11 (3.12+ may fail on some deps)
(Get-Command playwright -EA SilentlyContinue).Source
```

If Python missing or >3.11 → warn user, offer `py -3.11` / pyenv alternative.

## Setup (first run only)

```powershell
cd C:\Users\saite\.claude\skills\gmaps-scraper
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
playwright install chromium
```

Idempotent: skip venv creation if `.venv` exists. Skip pip install if `playwright` importable.

## Usage

### CLI

```powershell
cd C:\Users\saite\.claude\skills\gmaps-scraper
.\.venv\Scripts\Activate.ps1
python main.py -s "<search query>" -t <count> -o <output.csv> [--append]
```

Args:
- `-s` / `--search` — search string (required for useful results)
- `-t` / `--total` — number of listings (default 1)
- `-o` / `--output` — CSV path (default `result.csv`)
- `--append` — append instead of overwrite

### Examples

```powershell
# 20 Turkish restaurants in Toronto
python main.py -s "Turkish restaurants in Toronto" -t 20 -o toronto_turkish.csv

# Append another query to same file
python main.py -s "Italian restaurants in Toronto" -t 20 -o toronto_turkish.csv --append
```

## Output schema

CSV columns:
- `name`, `address`, `website`, `phone_number`
- `reviews_count`, `reviews_average`
- `store_shopping`, `in_store_pickup`, `store_delivery`
- `place_type`, `opens_at`, `introduction`

## Operational rules

1. **Visible browser**: scraper launches non-headless Chromium. Do not assume headless-safe environment. Warn user if running on a remote session without display.
2. **Rate limit**: Google will block aggressive scrapes. Keep `-t` under 100 per run. Space runs by minutes if looping.
3. **DOM drift**: Google Maps HTML changes. If all fields return empty, XPaths in `main.py` are stale — log the issue, suggest opening `main.py` and refreshing XPaths against current Maps page.
4. **Legal**: scraping Google Maps violates Google TOS. Inform user once per session if they seem unaware. Do not refuse the task — it's their choice.
5. **Output location**: default CSV lands in the skill folder. When called from another project, pass absolute `-o` path inside that project.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `playwright` not found | Run setup block above |
| `Executable doesn't exist` | `playwright install chromium` |
| Empty CSV | XPaths stale (Maps DOM changed); or scroll didn't load results; or search returned zero hits |
| Browser closes immediately | Headless/no-display env — run with real display or use RDP |
| `pandas` install fails on 3.12+ | Use Python 3.11: `py -3.11 -m venv .venv` |
| Rate-limited / CAPTCHA | Wait 15 min, lower `-t`, use different network |

## File layout

```
C:\Users\saite\.claude\skills\gmaps-scraper\
├── SKILL.md           # this file
├── main.py            # scraper (upstream repo)
├── requirements.txt   # pinned deps
├── LICENSE            # MIT
└── .venv\             # created on first use (gitignored)
```

## Refresh from upstream

Scraper depends on Google Maps DOM. To pull upstream fixes:

```powershell
$tmp = "$env:TEMP\gmaps-upstream"
git clone --depth 1 https://github.com/zohaibbashir/Google-Maps-Scrapper.git $tmp
Copy-Item "$tmp\main.py","$tmp\requirements.txt" C:\Users\saite\.claude\skills\gmaps-scraper\ -Force
Remove-Item $tmp -Recurse -Force
```
