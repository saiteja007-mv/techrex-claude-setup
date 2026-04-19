# Business Intelligence Framework

Comprehensive guide to BI reporting, KPI design, metrics frameworks, and stakeholder communication for data analysts.

## KPI Design and Selection

### SMART KPI Framework

**Specific**
- Clearly defined metric with unambiguous calculation
- Example: "Monthly Recurring Revenue (MRR)" not "Revenue"
- Include: What, who, where, when

**Measurable**
- Quantifiable with available data
- Consistent measurement methodology
- Automated data collection when possible

**Achievable**
- Realistic given resources and constraints
- Based on historical performance and benchmarks
- Stretch goals vs. baseline targets

**Relevant**
- Aligns with business objectives
- Actionable - can influence through decisions
- Matters to stakeholders

**Time-Bound**
- Specific time period (daily, weekly, monthly, quarterly)
- Clear reporting cadence
- Historical trend visibility

### Types of Metrics

**Lagging Indicators**
- Measure past performance
- Examples: Revenue, profit, customer count
- Advantage: Objective and easy to measure
- Limitation: Retrospective, can't influence directly

**Leading Indicators**
- Predict future performance
- Examples: Pipeline value, website traffic, trial sign-ups
- Advantage: Actionable and forward-looking
- Limitation: May not perfectly correlate with outcomes

**Input Metrics**
- Activities that drive outcomes
- Examples: Sales calls made, marketing emails sent
- Use: Monitor effort and resource allocation

**Output Metrics**
- Results of activities
- Examples: Deals closed, revenue generated
- Use: Measure success and ROI

### KPI Hierarchy

**Strategic KPIs (Executive Level)**
- High-level business objectives
- Reviewed: Monthly or quarterly
- Examples: Revenue growth, market share, profitability
- Audience: C-suite, board of directors

**Operational KPIs (Management Level)**
- Department or function performance
- Reviewed: Weekly or monthly
- Examples: Sales quota attainment, customer satisfaction score
- Audience: Department heads, managers

**Tactical KPIs (Team Level)**
- Individual or team activities
- Reviewed: Daily or weekly
- Examples: Daily active users, support ticket resolution time
- Audience: Team leads, individual contributors

## Common Business Metrics by Function

### Sales Metrics

**Revenue Metrics:**
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Average Deal Size
- Revenue per Sales Rep

**Pipeline Metrics:**
- Pipeline Value
- Pipeline Coverage Ratio (Pipeline / Quota)
- Conversion Rate by Stage
- Sales Cycle Length

**Activity Metrics:**
- Calls/Meetings per Rep
- Opportunities Created
- Win Rate
- Customer Acquisition Cost (CAC)

### Marketing Metrics

**Acquisition:**
- Cost per Lead (CPL)
- Cost per Acquisition (CPA)
- Marketing Qualified Leads (MQLs)
- Lead-to-Customer Conversion Rate

**Engagement:**
- Website Traffic
- Email Open Rate / Click-Through Rate
- Social Media Engagement
- Content Downloads

**ROI:**
- Marketing ROI
- Customer Lifetime Value to CAC Ratio (LTV:CAC)
- Attribution by Channel
- Return on Ad Spend (ROAS)

### Product Metrics

**Usage:**
- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- DAU/MAU Ratio (Stickiness)
- Feature Adoption Rate

**Engagement:**
- Session Duration
- Sessions per User
- Time to Value
- Power User Percentage

**Retention:**
- Retention Rate (Day 1, 7, 30)
- Churn Rate
- Customer Lifetime Value (CLV)
- Net Promoter Score (NPS)

### Customer Success Metrics

**Health:**
- Customer Health Score
- Product Usage Trends
- Support Ticket Volume
- Time to Resolution

**Retention:**
- Gross Retention Rate
- Net Retention Rate
- Expansion Revenue
- Renewal Rate

**Satisfaction:**
- Net Promoter Score (NPS)
- Customer Satisfaction Score (CSAT)
- Customer Effort Score (CES)

### Finance Metrics

**Profitability:**
- Gross Margin
- Operating Margin
- Net Profit Margin
- EBITDA

**Efficiency:**
- Operating Expense Ratio
- Burn Rate
- Runway
- Rule of 40 (Growth Rate + Profit Margin)

**Cash Flow:**
- Cash Flow from Operations
- Free Cash Flow
- Days Sales Outstanding (DSO)
- Cash Conversion Cycle

## Metric Definition Standards

### Metric Documentation Template

**Metric Name:** Clear, descriptive name

**Definition:** Precise calculation formula

**Purpose:** Why this metric matters, what it measures

**Data Source:** System(s) where data originates

**Calculation:** Step-by-step methodology
```
Example:
Customer Churn Rate = (Customers Lost in Period / Customers at Start of Period) × 100%
```

**Granularity:** Time period and dimensions (daily/weekly/monthly, by segment)

**Owner:** Person responsible for accuracy and interpretation

**Target:** Goal or benchmark

**Refresh Frequency:** How often data is updated

**Related Metrics:** Connected or dependent metrics

**Caveats:** Known limitations, edge cases, or seasonal patterns

### Calculation Best Practices

**Consistency:**
- Use same calculation across all reports
- Document any variations or exceptions
- Centralize metric definitions

**Transparency:**
- Make calculations visible
- Explain assumptions
- Note data quality issues

**Reproducibility:**
- Document data transformations
- Version control calculation logic
- Enable audit trail

## Reporting Frameworks

### Executive Reporting

**Format:**
- One-page dashboard or summary
- Focus on strategic KPIs (5-7 maximum)
- Trends and comparisons (vs. target, prior period, forecast)

**Content:**
- Current performance vs. goals
- Key insights and narrative
- Forward-looking indicators
- Risks and opportunities

**Frequency:**
- Monthly or quarterly
- Ad-hoc for major events

**Best Practices:**
- Lead with business impact
- Use visual hierarchy (most important top-left)
- Provide context (benchmarks, targets)
- Include recommended actions

### Operational Reporting

**Format:**
- Detailed dashboards with drill-down capability
- Organized by functional area
- Real-time or daily updates

**Content:**
- Department/team KPIs
- Performance trends
- Anomaly alerts
- Comparative analysis

**Frequency:**
- Daily or weekly
- Real-time for critical metrics

**Best Practices:**
- Enable self-service access
- Provide filtering and segmentation
- Include diagnostic metrics
- Link to detailed data

### Analytical Reports

**Format:**
- In-depth analysis document
- Combines data, visualizations, and narrative
- Appendix with methodology and details

**Content:**
- Research question or hypothesis
- Data sources and methodology
- Findings with supporting evidence
- Recommendations and next steps

**Frequency:**
- Ad-hoc or project-based
- Strategic initiatives

**Best Practices:**
- Tell a data story
- Balance depth with clarity
- Provide executive summary
- Document assumptions and limitations

## Dashboard Design Patterns

### North Star Metric Dashboard

**Purpose:** Focus entire organization on single most important metric

**Layout:**
- Primary metric prominently displayed
- Supporting metrics that drive the north star
- Trend over time
- Segmentation by key dimensions

**Example:** For SaaS company
- North Star: Active Users
- Drivers: New sign-ups, activation rate, retention rate

### Funnel Dashboard

**Purpose:** Track conversion through stages

**Layout:**
- Visual funnel with drop-off rates
- Conversion rates between stages
- Volume at each stage
- Time spent in each stage

**Example:** Sales pipeline or customer journey

### Performance Scorecard

**Purpose:** Track multiple KPIs against targets

**Layout:**
- Table or grid of metrics
- Actual vs. target
- Trend indicators (up/down arrows)
- Color coding (green/yellow/red)

**Example:** Department OKRs or quarterly goals

### Cohort Analysis Dashboard

**Purpose:** Track behavior of user groups over time

**Layout:**
- Cohort retention matrix (heatmap)
- Trend lines by cohort
- Comparison across cohorts
- Key segment filters

**Example:** Monthly cohort retention or revenue

## Stakeholder Communication

### Know Your Audience

**Executive Stakeholders:**
- Want: High-level insights, business impact, recommendations
- Provide: Executive summary, key takeaways, strategic implications
- Format: One-pager, presentation slides
- Language: Business outcomes, not technical jargon

**Department Managers:**
- Want: Actionable insights for their function, performance tracking
- Provide: Detailed metrics, trends, benchmarks, action items
- Format: Dashboard, regular reports
- Language: Functional metrics, team performance

**Technical Teams:**
- Want: Methodology, data quality, detailed analysis
- Provide: Data sources, calculations, assumptions, limitations
- Format: Technical documentation, analysis notebooks
- Language: Statistical terms, technical accuracy

### Insight Presentation Structure

**1. Lead with the Insight**
- Start with "so what" - the business implication
- Example: "Customer retention decreased 5% in Q3, putting $2M in ARR at risk"

**2. Provide Context**
- Comparison points (vs. target, prior period, benchmark)
- Explain significance
- Show trend

**3. Support with Data**
- Visualization showing the pattern
- Key statistics
- Confidence in findings

**4. Explain the "Why"**
- Hypotheses for cause
- Contributing factors
- Supporting evidence

**5. Recommend Actions**
- Specific next steps
- Prioritized by impact
- Owners and timeline

### Meeting Best Practices

**Before:**
- Send materials 24 hours in advance
- Include clear agenda and objectives
- Pre-read executive summary

**During:**
- Start with key takeaways
- Allow time for questions
- Use visuals to support points
- Take notes on feedback and requests

**After:**
- Share slides and dashboard links
- Document action items with owners
- Follow up on outstanding questions
- Schedule next review

## Data Storytelling

### Narrative Structure

**Setup:**
- Establish context and background
- Define the question or problem
- Explain why it matters

**Conflict:**
- Present the data and findings
- Highlight unexpected results or challenges
- Show the gap between current and desired state

**Resolution:**
- Provide recommendations
- Show path forward
- Quantify expected impact

### Visualization in Stories

**Guide the Viewer:**
- Use annotations to call out key points
- Highlight important data with color
- Add reference lines for targets or benchmarks
- Progressive disclosure - simple to complex

**Create Flow:**
- Logical sequence of charts
- Build on previous insights
- Use consistent visual language
- Smooth transitions between topics

## Metric Pitfalls to Avoid

**Vanity Metrics**
- Look impressive but don't drive decisions
- Example: Total page views (without engagement context)
- Solution: Focus on actionable metrics tied to outcomes

**Metrics Gaming**
- Optimizing metric at expense of actual goal
- Example: Shortening sales cycle by cherry-picking easy deals
- Solution: Use balanced scorecard, track quality metrics

**Analysis Paralysis**
- Too many metrics, no clear priorities
- Solution: Limit to 5-7 key metrics per dashboard

**Lack of Context**
- Metrics without benchmarks or trends
- Solution: Always include comparison (vs. target, prior period)

**Ignoring Segmentation**
- Aggregated metrics hide important patterns
- Solution: Analyze by key segments (cohort, channel, region)

## Self-Service BI Enablement

### Data Democratization

**Principles:**
- Make data accessible to all employees
- Provide tools and training
- Trust teams with insights
- Centralize metrics definitions

**Requirements:**
- Clean, well-structured data
- User-friendly BI tools
- Documented data dictionary
- Governance and security

### Data Literacy Program

**Training Topics:**
- How to use BI tools
- Interpreting common chart types
- Understanding metric definitions
- Avoiding common analytical mistakes

**Resources:**
- Quick reference guides
- Video tutorials
- Office hours for support
- Metric glossary

### Governance

**Standards:**
- Certified datasets and dashboards
- Single source of truth for metrics
- Naming conventions
- Data quality checks

**Access Control:**
- Role-based permissions
- Data privacy and security
- Audit logging
- Request process for new access

## Tools and Platforms

**Tableau**
- Best for: Enterprise dashboards, complex visualizations
- Strength: Powerful, intuitive drag-and-drop
- Considerations: Higher cost, desktop + server components

**Power BI**
- Best for: Microsoft shop, cost-effective BI
- Strength: Excel integration, Azure ecosystem
- Considerations: Less elegant than Tableau

**Looker**
- Best for: Data modeling, embedded analytics
- Strength: LookML for reusable logic, data governance
- Considerations: Requires SQL/LookML skills

**Metabase/Redash**
- Best for: Startups, simple needs, SQL users
- Strength: Open source, free, easy to set up
- Considerations: Less polished, fewer enterprise features

**Google Data Studio**
- Best for: Google Analytics integration, free dashboards
- Strength: Free, easy sharing, Google ecosystem
- Considerations: Limited data modeling

## Best Practices Summary

**KPI Design:**
1. Align metrics with business objectives
2. Balance leading and lagging indicators
3. Document calculations and data sources
4. Review and refine metrics regularly

**Reporting:**
1. Know your audience and their needs
2. Use appropriate level of detail
3. Provide context and comparisons
4. Focus on insights, not just data

**Dashboards:**
1. One dashboard per purpose/audience
2. Limit to 7-9 visualizations
3. Use visual hierarchy
4. Enable interactivity and drill-down

**Communication:**
1. Lead with the insight
2. Tell a story with data
3. Provide actionable recommendations
4. Follow up and measure impact

**Governance:**
1. Centralize metric definitions
2. Establish single source of truth
3. Implement data quality checks
4. Enable self-service with guardrails
