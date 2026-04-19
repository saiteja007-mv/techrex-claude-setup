---
name: prompt-refiner
description: Helps users craft better prompts by analyzing their initial request and suggesting improvements. Use this skill when users explicitly ask to "refine my prompt", "improve this prompt", "make this prompt better", or when they mention wanting help with prompt engineering. Also trigger when users ask Claude to help them build, create, or develop something but their request lacks clarity, specific requirements, or sufficient detail - the skill helps crystallize vague ideas into actionable prompts.
---

# Prompt Refiner

This skill helps users transform vague or incomplete prompts into clear, detailed, and effective instructions that lead to better outcomes.

## When to Activate

Trigger this skill when:
- User explicitly asks: "refine my prompt", "improve this prompt", "help me write a better prompt"
- User says they want to build/create something but their description is very general or lacks key details
- User asks for help with prompt engineering or prompt crafting
- User mentions they're not getting good results and want to improve their request

Do NOT trigger for:
- Straightforward, clear requests that already have sufficient detail
- Follow-up questions in an ongoing conversation
- Simple factual queries

## Refinement Process

### 1. Analyze the Original Prompt

First, understand what the user is trying to accomplish:
- **Core intent**: What's the main goal?
- **Context**: What domain or use case?
- **Constraints**: Any mentioned limitations (time, resources, platform, etc.)?
- **Gaps**: What critical information is missing?

### 2. Identify Improvement Opportunities

Look for these common issues:
- **Vague objectives**: "Make something cool" vs. "Create a dashboard showing sales by region"
- **Missing context**: No mention of target audience, technical level, existing systems
- **Unclear scope**: No boundaries on size, complexity, or features
- **Ambiguous requirements**: "Fast", "good", "modern" without definitions
- **No success criteria**: How to know when it's complete or correct?
- **Missing format/structure preferences**: No guidance on output format

### 3. Generate Refined Prompt

Create an improved version that:

**Clarifies intent**
- Transform vague goals into specific, measurable objectives
- Example: "improve website" → "increase landing page conversion rate by optimizing CTA placement and reducing load time below 2 seconds"

**Adds essential context**
- Who is this for? (audience, skill level)
- What environment/platform? (tech stack, existing systems)
- What constraints exist? (budget, time, compatibility)

**Defines scope clearly**
- Specify boundaries: "Include X, exclude Y"
- Break complex tasks into phases if helpful
- Example: "Build an app" → "Build a MVP web app with 3 core features: user auth, data entry form, and basic analytics dashboard"

**Specifies desired output**
- What format should the response take? (code, document, step-by-step guide)
- How detailed should it be?
- Should it include examples, explanations, or just deliverables?

**Includes success criteria**
- What does "done" look like?
- How should the result be evaluated?

### 4. Present the Refinement

Show the refined prompt in a clear, structured way:

```
**Original prompt:**
[Quote the user's original request]

**Refined prompt:**
[Your improved version]

**Key improvements:**
- [What you clarified]
- [What context you added]
- [What scope you defined]
```

Then ask: "Would you like me to proceed with this refined prompt, or would you like to adjust anything?"

## Refinement Strategies by Use Case

### Building/Creating Something
Ask or infer:
- What technology stack or platform?
- Who will use it?
- What are the core features (must-have vs. nice-to-have)?
- Any integration requirements?
- Performance or scale requirements?

### Data Analysis/Processing
Ask or infer:
- What's the data source and format?
- What's the goal (insights, automation, reporting)?
- Who needs to access the results?
- Any specific metrics or KPIs?
- How should results be presented?

### Writing/Content Creation
Ask or infer:
- What's the audience and their knowledge level?
- What's the purpose (inform, persuade, document)?
- Desired tone and style?
- Any length or format requirements?
- Where will it be published/used?

### Learning/Explanation
Ask or infer:
- What's the user's current knowledge level?
- What's the learning goal?
- Preferred learning style (examples, theory, hands-on)?
- Any time constraints?
- How will they apply this knowledge?

## Examples

**Example 1: Vague Development Request**

Original: "Help me build a website"

Refined: "Help me build a personal portfolio website with the following requirements:
- Platform: Static site using HTML/CSS/JavaScript (no backend needed)
- Sections: Home, About, Projects (showcase 5 projects with screenshots and descriptions), Contact
- Design: Clean, minimalist design with responsive layout for mobile/tablet/desktop
- Hosting: Deploy to GitHub Pages
- Deliverable: Complete source code with comments and deployment instructions

Please provide the HTML structure first, then CSS styling, and finally any necessary JavaScript for smooth scrolling and project filtering."

**Example 2: Unclear Data Task**

Original: "Analyze this sales data"

Refined: "Analyze the Q4 2024 sales data (CSV format with columns: date, product_id, quantity, revenue, region) to:
1. Identify top 5 performing products by revenue
2. Compare regional sales performance (% of total)
3. Detect any notable trends or anomalies in November-December
4. Provide actionable recommendations for Q1 2025 strategy

Deliverable: Python script using pandas for analysis, plus a markdown report with visualizations (charts showing trends and comparisons) and executive summary of findings."

**Example 3: Ambiguous Automation Request**

Original: "Automate my workflow"

Refined: "Create an n8n workflow to automate my YouTube content publishing process:
- Trigger: New video script saved in Google Drive folder 'Scripts'
- Actions needed:
  1. Extract title and description from script
  2. Generate SEO-optimized tags using AI
  3. Create thumbnail using template (store in 'Thumbnails' folder)
  4. Schedule upload to YouTube with metadata
  5. Post announcement to LinkedIn and Twitter
  6. Send completion notification via Telegram
- Requirements: Use free/low-cost APIs where possible, include error handling
- Output: n8n JSON workflow file with setup instructions and API key configuration guide"

## Communication Style

- Be collaborative, not prescriptive - frame suggestions as "would it help to clarify..." rather than "you must specify..."
- If the user's intent is still unclear after initial analysis, ask 1-2 specific clarifying questions before generating the refinement
- Keep the refined prompt concise but complete - don't over-engineer simple requests
- Preserve the user's voice and core intent - enhance, don't rewrite entirely
- Make it clear that the refined version is a suggestion they can modify

## After Refinement

Once the user approves the refined prompt (or requests modifications):
- Immediately proceed to execute on the refined prompt
- Don't ask for permission again - they've already approved by saying "yes" or "go ahead"
- Maintain continuity by referencing the refined requirements as you work

## Edge Cases

**User prompt is already good**: If the original prompt is clear and detailed, acknowledge this: "Your prompt is already well-structured! Let me proceed with it as-is." Then continue with their request.

**Multiple interpretations possible**: Present 2-3 refined versions for different interpretations: "I see a few ways to interpret this. Here are refined versions for each approach: [A], [B], [C]. Which direction matches your intent?"

**User resists refinement**: If user just wants you to proceed, do so. Don't force the refinement process. The skill is helpful, not mandatory.