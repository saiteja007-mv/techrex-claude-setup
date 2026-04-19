# Stage 1: Deep Research

Conduct comprehensive market and technical research to validate the app idea.

## What This Does

- Validates market opportunity
- Analyzes competitors
- Recommends tech approach for 2025
- Estimates costs
- Identifies risks and opportunities

## Process

1. **Identify skill level**
   - Ask: Vibe-coder (A), Developer (B), or In-between (C)

2. **Conduct targeted Q&A**
   - Questions adapt based on skill level
   - 6-8 questions total
   - One question at a time, wait for answer

3. **Generate research document**
   - Market analysis
   - Competitor breakdown
   - Technical recommendations
   - Cost estimates for 2025
   - AI tool suggestions

4. **Save results**
   - Create `docs/` folder if needed
   - Save as `docs/research-[AppName].txt`

## Questions by Skill Level

### Vibe-Coder Questions (A):
1. What's your app idea? Describe it like explaining to a friend - what problem does it solve?
2. Who needs this most? Describe your ideal user
3. What's out there already? Name any similar apps or current solutions
4. What would make someone choose YOUR app? What's the special sauce?
5. What are the 3 absolute must-have features for launch?
6. How do you imagine people using this - phone app, website, or both?
7. What's your timeline? Days, weeks, or months to launch?
8. Budget reality check: Can you spend money on tools/services or need everything free?

### Developer Questions (B):
1. What's your main research topic and project context? Include technical domain
2. List 3-5 specific questions your research must answer
3. What technical decisions will this research inform? (architecture, stack, integrations)
4. Define scope boundaries - what's included and explicitly excluded?
5. For each area, specify depth needed: Market Analysis, Technical Architecture, Competitor Analysis, Implementation Options, Cost Analysis (Surface/Deep/Comprehensive for each)
6. Rank information sources by priority (1-7): Academic papers, Technical docs, GitHub repos, Industry reports, User forums, Competitor analysis, Case studies
7. Any technical constraints? Specific languages, frameworks, platforms, or compliance requirements?
8. What's the business context? Startup, enterprise, side project, or client work?

### In-Between Questions (C):
1. Tell me about your project idea and your current skills. What can you code, and where do you need help?
2. What problem are you solving? Who has this problem most?
3. What specific things do you need to research? List both technical and business aspects
4. What similar solutions exist? What do you like/dislike about them?
5. Platform preferences: Web app, Mobile app, Desktop app, or Not sure - help me decide
6. Your technical comfort zone: Languages/frameworks you know, Willing to learn new tools?, Prefer familiar or optimal?
7. Timeline and success metrics? When do you want to launch and how will you measure success?
8. Budget for tools and services? Free only, under $50/month, under $200/month, or flexible?

## Research Output Format

Generate comprehensive research covering:

### 1. Executive Summary
- App concept in 2-3 sentences
- Target market
- Key opportunity

### 2. Market Analysis
- Market size and growth
- Target audience demographics
- Pain points and needs
- Trends for 2025

### 3. Competitor Analysis
| Competitor | Features | Pricing | Users | Strengths | Weaknesses |
|------------|----------|---------|-------|-----------|------------|
| App 1 | List | $X | XXk | What they do well | Gaps |
| App 2 | List | $X | XXk | What they do well | Gaps |

### 4. Technical Recommendations (2025)

#### For Vibe-Coders:
- **Recommended**: Bolt.new, Lovable, or v0.dev
- **Why**: No coding required, instant deployment
- **Cost**: $20-50/month
- **Time to launch**: 1-2 weeks

#### For Developers:
- **Frontend**: Next.js 14, Remix, or SvelteKit
- **Backend**: Supabase, Firebase, or custom API
- **Database**: PostgreSQL or MongoDB
- **Deployment**: Vercel, Netlify, or Railway
- **Cost**: $0-100/month
- **Time to launch**: 3-6 weeks

#### For In-Between:
- **Approach**: Low-code with Cursor or Windsurf
- **Stack**: Next.js + Supabase (templates available)
- **Learning curve**: 2-3 weeks
- **Cost**: $20-75/month
- **Time to launch**: 3-4 weeks

### 5. AI Tool Recommendations

**For Building (2025):**
- **Claude Code**: Terminal agent, project-aware, $20/mo
- **Cursor**: AI IDE, best for learning, $20/mo
- **Windsurf**: Beginner-friendly, visual feedback, $15/mo
- **Gemini CLI**: Free, huge context, great for research
- **GitHub Copilot**: Code completion, $10/mo

**For No-Code:**
- **Bolt.new**: Instant Next.js apps, $20/mo
- **Lovable**: Fullstack builder, 25k apps shipped, $40/mo
- **v0.dev**: UI components, free tier available

### 6. Cost Breakdown

**Development Phase:**
| Item | Free Option | Paid Option | Recommended |
|------|-------------|-------------|-------------|
| AI Coding Assistant | Cline + Gemini | Cursor $20 | Paid (faster) |
| Design Tools | Figma free | Figma Pro $12 | Free OK |
| Dev Environment | VS Code | Cursor/Windsurf | Based on skill |

**Production Phase (Monthly):**
| Service | Free Tier | Paid Tier | At 1K Users |
|---------|-----------|-----------|-------------|
| Hosting | 100GB/mo | $20/mo | $20 |
| Database | 500MB | $25/mo | $25 |
| Auth Service | 10K users | $25/mo | Free OK |
| Email | 100/day | $10/mo | $10 |
| **Total** | **$0** | **$80/mo** | **$55/mo** |

### 7. Implementation Roadmap

**Phase 1: Foundation (Week 1)**
- Set up development environment
- Create project structure
- Basic authentication

**Phase 2: Core Features (Weeks 2-3)**
- Main functionality
- Database integration
- User interface

**Phase 3: Polish & Launch (Week 4)**
- UI/UX improvements
- Testing and bug fixes
- Deployment

### 8. Risks and Mitigation

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Competition | High | Medium | Focus on unique feature |
| Technical complexity | Medium | High | Use proven stack |
| Budget overrun | Medium | Medium | Use free tiers initially |
| Timeline slip | High | Low | MVP first, features later |

### 9. Success Metrics

**Launch Goals:**
- 50 beta users
- 70% weekly retention
- <3s page load time
- <$100/month costs

**3-Month Goals:**
- 500 active users
- 50% monthly retention
- Break even on costs

### 10. Next Steps

1. Review this research
2. Proceed to Stage 2: Create PRD
3. Or adjust research focus if needed

## Example Output

```markdown
# Deep Research: RecipeShare App

## Executive Summary
RecipeShare is a social recipe sharing platform for home cooks who want to discover,
save, and share family recipes. Target market: home cooks aged 25-45 who actively
cook 3+ times per week.

## Market Analysis
- **Market Size**: $2.3B recipe app market, growing 8% annually
- **Target Audience**: 40M home cooks in US, 65% female, 25-45 years old
- **Pain Points**:
  - Recipes scattered across websites with ads
  - Hard to organize family recipes
  - Want community but not Instagram-style pressure

[... rest of research ...]
```

## After Research

Ask: "Research complete! I've saved it to `docs/research-[AppName].txt`

Key findings:
- [Top 3 insights]

Ready to move to Stage 2: Product Requirements Document? (yes/no/review research)"

## Notes

- Take 20-30 minutes for thorough research
- Use latest 2025 tools and data
- Be realistic about costs and timelines
- Adjust depth based on user's skill level
- Celebrate completion of Stage 1!
