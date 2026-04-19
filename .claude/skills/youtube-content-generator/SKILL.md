---
name: youtube-content-generator
description: Use when user sends /short or /long with an attached transcript or subtitle file to generate YouTube video content packages including titles, descriptions, tags, and social captions
---

# YouTube Content Generator

## Trigger

User sends `/short` or `/long` — with or without an attached file. If no file attached, ask for a transcript or subtitle file.

## Commands

| Command | What to generate |
|---------|-----------------|
| `/short` | 5 titles, short description, 10-15 viral tags, **Instagram Reel caption (always required)** |
| `/long` | 5 titles, full description with chapters + social links, 10-15 viral tags, **Instagram thumbnail caption (always required)**, 1280×720 thumbnail prompt |

> **IMPORTANT:** Instagram caption is a MANDATORY section in every output — single-video WhatsApp/Telegram replies AND multi-video markdown batches. If producing a per-day/per-video markdown file, each entry must contain its own Instagram Reel caption block.

## Step 1 — Read the transcript

Extract plain text from the attached file regardless of format:
- `.txt` — read directly
- `.srt` / `.vtt` — strip timing lines, keep dialogue
- `.json` — extract `text` / `content` fields

## Step 2 — Generate viral tags (REQUIRED)

Run this Node.js snippet inline via `exec` to get seed tags + YouTube Suggest:

```js
// Save as /tmp/yt-tags.js and run: node /tmp/yt-tags.js "<text>"
const https = require('https');
const text = process.argv.slice(2).join(' ').toLowerCase();
const STOP = new Set('a,about,after,all,am,an,and,any,are,as,at,be,because,been,before,both,but,by,can,did,do,does,doing,for,from,get,had,has,have,he,her,him,his,how,i,if,in,into,is,it,its,just,let,like,me,more,most,my,no,not,now,of,on,or,our,out,over,same,she,so,some,than,that,the,their,them,then,there,they,this,those,through,to,too,up,very,was,we,were,what,when,where,which,while,who,why,will,with,would,you,your'.split(','));

const words = text.replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(w=>w.length>2 && !STOP.has(w));
const freq = {}; words.forEach(w=>freq[w]=(freq[w]||0)+1);
const top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,8).map(e=>e[0]);

const bigrams = [];
for(let i=0;i<words.length-1;i++){
  const b=`${words[i]} ${words[i+1]}`;
  if(b.length<=30 && !bigrams.includes(b)) bigrams.push(b);
}
const seeds = [...bigrams.slice(0,5), ...top.slice(0,3)];

let done=0, suggestions=[];
if(!seeds.length){ console.log(JSON.stringify(top.slice(0,15))); process.exit(0); }

seeds.forEach(seed=>{
  const url=`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(seed)}`;
  https.get(url,{timeout:4000},res=>{
    let d=''; res.on('data',c=>d+=c);
    res.on('end',()=>{
      try{ const j=JSON.parse(d); suggestions.push(...(j[1]||[]).slice(0,3)); }catch{}
      if(++done===seeds.length){
        const all=[...new Set([...bigrams.slice(0,6),...top,...suggestions])].slice(0,15);
        console.log(JSON.stringify(all));
      }
    });
  }).on('error',()=>{ if(++done===seeds.length) console.log(JSON.stringify([...bigrams.slice(0,6),...top].slice(0,15))); });
});
```

Run it:
```bash
node /tmp/yt-tags.js "$(cat /path/to/transcript.txt)" > /tmp/yt-tags-result.json
```

Use the resulting tag array in all outputs.

## Step 3 — Generate content with Claude (YOU)

Using the transcript text + tags from Step 2, generate the full package yourself. Do NOT shell out to gemini or llm.

### /short output format

Reply with exactly this structure in WhatsApp/Telegram (formatted, not JSON):

```
🎬 *YouTube Shorts Package*

━━━━━━━━━━━━━━━━━━━━━━
📌 *TITLES* (pick one)
━━━━━━━━━━━━━━━━━━━━━━
1. [title]
2. [title]
3. [title]
4. [title]
5. [title]

━━━━━━━━━━━━━━━━━━━━━━
📝 *DESCRIPTION*
━━━━━━━━━━━━━━━━━━━━━━
[2 short paragraphs + 4-6 bullet points + hashtags + social links]

━━━━━━━━━━━━━━━━━━━━━━
🏷️ *TAGS* (copy-paste)
━━━━━━━━━━━━━━━━━━━━━━
[tag1, tag2, tag3 ... all 10-15 tags]

━━━━━━━━━━━━━━━━━━━━━━
📸 *INSTAGRAM REEL CAPTION*
━━━━━━━━━━━━━━━━━━━━━━
[caption with hook + CTA + 5-8 hashtags]
```

### /long output format

```
🎬 *YouTube Long Video Package*

━━━━━━━━━━━━━━━━━━━━━━
📌 *TITLES* (pick one)
━━━━━━━━━━━━━━━━━━━━━━
1. [title]
...5 total

━━━━━━━━━━━━━━━━━━━━━━
📝 *DESCRIPTION*
━━━━━━━━━━━━━━━━━━━━━━
[hook paragraph]

⏰ CHAPTERS:
0:00 - Intro
...

✅ What you'll learn:
• point 1
...

[social links block]
[CTA + hashtags]

━━━━━━━━━━━━━━━━━━━━━━
🏷️ *TAGS*
━━━━━━━━━━━━━━━━━━━━━━
[all 10-15 tags]

━━━━━━━━━━━━━━━━━━━━━━
📸 *INSTAGRAM CAPTION*
━━━━━━━━━━━━━━━━━━━━━━
[thumbnail caption]

━━━━━━━━━━━━━━━━━━━━━━
🖼️ *THUMBNAIL PROMPT* (1280×720)
━━━━━━━━━━━━━━━━━━━━━━
[detailed image generation prompt]
```

## Social Links Block (always include)

```
🌐 Connect with Me:
🎬 YouTube: https://www.youtube.com/@The_TechRex
📸 Instagram: https://instagram.com/The_TechRex
📝 Medium: https://medium.com/@saiteja.techrex
📰 Blog: https://saitejatechrex.blogspot.com
💼 LinkedIn: https://linkedin.com/in/venkatasaitejam
🐙 GitHub: https://github.com/thetechrex | https://github.com/saiteja007-mv
🌐 Portfolio: https://saitejamothukuri.com
```

## Title Rules

- ≤70 characters
- Max 1 emoji per title
- Curiosity-driven (not clickbait)
- Include trending keywords from tags
- Mix formats: How-to, List, Secret/Trick, Comparison, Complete Guide

## Tag Rules

- All lowercase
- No duplicates
- Mix: 5 head terms (short, broad) + 5-7 long-tail phrases + 3 trending
- From YouTube Suggest data whenever possible
- 10-15 total

## Instagram Reel Caption Rules (ALWAYS required)

Every output must include an Instagram caption block. When processing a multi-video batch into a markdown file, add one IG caption per video (do not share one caption across videos).

Structure:
- **Hook line** (first sentence, attention-grabbing, emoji OK)
- **2-3 value/context lines** (what the Reel shows + why viewer should care)
- **CTA** (follow / save / comment / link-in-bio)
- **5-8 hashtags** mixing broad + niche + branded (`#TechRex` always included)

Length: 400-600 characters total (Instagram cap is 2200; Reels perform best under 125 chars visible before the "more" fold — front-load the hook).

Tone: punchier than YouTube — line breaks between thoughts, 1-2 emojis per line max, no long paragraphs.

## Thumbnail Prompt Rules (long only)

Include:
- Exact size: 1280×720 pixels
- Bold readable text (main keyword)
- High contrast colors
- Facial expression if relevant
- Style: professional, YouTube thumbnail aesthetic
- Background description
