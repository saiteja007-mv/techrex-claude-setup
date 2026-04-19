#!/usr/bin/env node
/**
 * YouTube Viral Tag Generator
 * Extracts viral tags from transcript text using n-gram analysis + YouTube Suggest API
 * 
 * Usage: node yt-tags.js "transcript text here"
 *    or: node yt-tags.js < transcript.txt
 */
const https = require('https');

const text = process.argv.slice(2).join(' ') || require('fs').readFileSync('/dev/stdin', 'utf-8');

const STOP = new Set('a,about,after,all,am,an,and,any,are,as,at,be,because,been,before,both,but,by,can,did,do,does,doing,for,from,get,had,has,have,he,her,him,his,how,i,if,in,into,is,it,its,just,let,like,me,more,most,my,no,not,now,of,on,or,our,out,over,same,she,so,some,than,that,the,their,them,then,there,they,this,those,through,to,too,up,very,was,we,were,what,when,where,which,while,who,why,will,with,would,you,your,going,gonna,just,yeah,okay,well,like,know,see,think,want,need,use,using,make,making,here,there,this,that'.split(','));

const normalized = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
const words = normalized.split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));

// Frequency map
const freq = {};
words.forEach(w => freq[w] = (freq[w] || 0) + 1);
const topWords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 10).map(e => e[0]);

// Bigrams
const bigrams = [];
for (let i = 0; i < words.length - 1; i++) {
    const b = `${words[i]} ${words[i+1]}`;
    if (b.length <= 30 && !bigrams.includes(b) && !STOP.has(words[i]) && !STOP.has(words[i+1])) {
        bigrams.push(b);
    }
}

// Trigrams
const trigrams = [];
for (let i = 0; i < words.length - 2; i++) {
    const t = `${words[i]} ${words[i+1]} ${words[i+2]}`;
    if (t.length <= 35 && !trigrams.includes(t)) {
        trigrams.push(t);
    }
}

// Seeds for YouTube Suggest
const seeds = [...new Set([...trigrams.slice(0, 3), ...bigrams.slice(0, 3), ...topWords.slice(0, 2)])];

let done = 0;
const suggestions = [];

if (seeds.length === 0) {
    console.log(JSON.stringify({ tags: topWords.slice(0, 15), csv: topWords.slice(0, 15).join(', ') }));
    process.exit(0);
}

seeds.forEach(seed => {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(seed)}`;
    https.get(url, { timeout: 5000 }, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
            try {
                const j = JSON.parse(d);
                suggestions.push(...(j[1] || []).slice(0, 3).map(s => s.toLowerCase()));
            } catch {}
            if (++done === seeds.length) finish();
        });
    }).on('error', () => { if (++done === seeds.length) finish(); });
});

function finish() {
    // Combine: trigrams > bigrams > suggestions > unigrams
    const all = [...new Set([
        ...trigrams.slice(0, 4),
        ...bigrams.slice(0, 5),
        ...suggestions.slice(0, 5),
        ...topWords.slice(0, 5)
    ])].filter(t => t.length > 3).slice(0, 15);
    
    console.log(JSON.stringify({ tags: all, csv: all.join(', ') }));
}
