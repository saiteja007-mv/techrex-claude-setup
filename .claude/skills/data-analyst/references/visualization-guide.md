# Data Visualization Guide

Best practices for creating effective data visualizations and dashboards that communicate insights clearly.

## Choosing the Right Chart Type

### Comparison

**Bar Chart**
- Use for: Comparing values across categories
- Orientation: Horizontal bars better for long category names
- Best practices: Start y-axis at zero, sort bars by value when no natural order
- Example: Revenue by product category

**Grouped Bar Chart**
- Use for: Comparing multiple series across categories
- Limit: Max 3-4 series for readability
- Example: Sales by region for Q1, Q2, Q3, Q4

**Stacked Bar Chart**
- Use for: Showing composition and comparison simultaneously
- Caution: Hard to compare middle segments
- Best for: Total + part-to-whole relationships
- Example: Revenue by product line, stacked by customer segment

### Distribution

**Histogram**
- Use for: Showing distribution of continuous data
- Bin selection: Critical for interpretation (5-20 bins typical)
- Y-axis: Frequency or density
- Example: Distribution of customer ages

**Box Plot (Box-and-Whisker)**
- Use for: Showing distribution summary and outliers
- Components: Median, quartiles, whiskers, outliers
- Advantage: Compare distributions across groups
- Example: Salary distribution by department

**Violin Plot**
- Use for: Detailed distribution shape with density
- Advantage: Shows full distribution vs. box plot summary
- Caution: Requires more space
- Example: Response time distribution by server

**Density Plot**
- Use for: Smooth distribution visualization
- Advantage: Better than histogram for comparing overlapping distributions
- Example: Purchase amount distribution for new vs. returning customers

### Trend Over Time

**Line Chart**
- Use for: Showing trends and changes over continuous time
- Best practice: Use for time series, not categories
- Multiple lines: Limit to 5-7 for readability
- Example: Monthly revenue over 2 years

**Area Chart**
- Use for: Emphasizing magnitude of change over time
- Stacked area: Show composition over time
- Caution: Can obscure individual series
- Example: Cumulative sign-ups over time

**Sparkline**
- Use for: Compact trend visualization in tables or dashboards
- Best practice: Show recent trend without axes for quick insight
- Example: 7-day trend for each metric in a KPI table

### Relationship

**Scatter Plot**
- Use for: Showing relationship between two continuous variables
- Add: Trendline to show correlation
- Color/size: Add third or fourth dimensions
- Example: Customer lifetime value vs. acquisition cost

**Bubble Chart**
- Use for: Three-dimensional relationships (x, y, size)
- Optional: Color for fourth dimension
- Caution: Don't overload with too many dimensions
- Example: Marketing spend vs. ROI, sized by campaign reach

**Heatmap**
- Use for: Showing patterns in matrix data
- Common uses: Correlation matrices, time-based patterns
- Color scale: Choose appropriate (diverging, sequential)
- Example: Website traffic by hour and day of week

### Part-to-Whole

**Pie Chart**
- Use for: Simple proportions with few categories (2-5 max)
- When to avoid: Many categories, comparing multiple pies, precise comparisons
- Best practice: Start largest slice at 12 o'clock, go clockwise
- Better alternative: Often a bar chart is clearer

**Donut Chart**
- Similar to pie chart
- Advantage: Can display total in center
- Same limitations as pie charts

**Treemap**
- Use for: Hierarchical part-to-whole with many categories
- Size: Represents value
- Color: Can represent additional dimension
- Example: Sales by category and subcategory

**Stacked Bar (100%)**
- Use for: Comparing proportions across groups
- Advantage: Easier to compare than multiple pie charts
- Example: Market share by region

### Geographic

**Choropleth Map**
- Use for: Showing values by geographic region
- Color: Darker = higher value (or use diverging scale)
- Caution: Larger areas visually dominate
- Example: Sales by state

**Symbol Map/Bubble Map**
- Use for: Point data with magnitude
- Size: Represents value
- Advantage: Not biased by area size like choropleths
- Example: Store locations sized by revenue

**Flow Map**
- Use for: Showing movement or connections
- Example: Customer migration between regions

## Design Principles

### Color

**Purpose-Driven Color Use:**
- Categorical: Distinct hues for different categories (max 7-10 colors)
- Sequential: Single hue gradient for ordered data (light to dark)
- Diverging: Two hues diverging from neutral for positive/negative
- Highlighting: Use color sparingly to draw attention

**Color Accessibility:**
- Avoid red-green combinations (colorblind friendly)
- Use ColorBrewer or similar tools for accessible palettes
- Test with colorblind simulators
- Add patterns or labels as backup for color coding

**Best Practices:**
- Limit to 3-4 colors for most charts
- Use brand colors consistently
- Ensure sufficient contrast for readability
- Gray out less important elements

### Typography

**Hierarchy:**
- Title: Largest, describes what the chart shows
- Subtitle: Context or time period
- Axis labels: Clear units and variable names
- Annotations: Call out key insights

**Readability:**
- Sans-serif fonts for digital (Arial, Helvetica, Open Sans)
- Minimum 10-12pt for body text
- Avoid all caps except for short labels
- Rotate axis labels only when necessary

### Layout and Spacing

**White Space:**
- Don't cram too much into one visualization
- Allow breathing room around charts
- Use padding between chart elements

**Alignment:**
- Align related elements
- Use grid systems for dashboards
- Maintain consistent spacing

**Sizing:**
- Make charts large enough to read comfortably
- Use appropriate aspect ratio (often 16:9 or 4:3)
- Responsive design for different screen sizes

## Dashboard Design

### Dashboard Purpose

**Operational Dashboard**
- Purpose: Monitor real-time or near-real-time operations
- Frequency: Viewed continuously or multiple times per day
- Design: Simple, focused on current status and alerts
- Example: Call center performance, server health

**Analytical Dashboard**
- Purpose: Explore data and uncover insights
- Frequency: Viewed regularly for decision-making
- Design: Interactive, allows filtering and drill-down
- Example: Sales performance analysis, customer segmentation

**Strategic Dashboard**
- Purpose: Track high-level KPIs and long-term trends
- Frequency: Viewed weekly or monthly
- Design: Clean, focuses on key metrics and trends
- Example: Executive scorecard, quarterly business review

### Layout Principles

**Visual Hierarchy:**
- Place most important metrics top-left (where eyes land first)
- Group related metrics together
- Use size to indicate importance
- Create clear sections with headers

**Information Density:**
- Don't overcrowd - less is more
- One dashboard per audience/purpose
- Limit to 7-9 visualizations per screen
- Use tabs or drill-downs for details

**Consistency:**
- Standardize metric definitions across dashboards
- Use consistent color schemes
- Align chart types to data types
- Maintain consistent layout patterns

### Interactivity

**Filtering:**
- Provide date range selectors
- Allow filtering by key dimensions (region, product, etc.)
- Make active filters clearly visible
- Sync filters across related visuals

**Drill-Down:**
- Enable clicking to see detail
- Show breadcrumb trail of navigation
- Provide easy way to return to overview

**Tooltips:**
- Show exact values on hover
- Include context (percentage of total, vs. last period)
- Keep concise - 2-3 lines max

**Export/Share:**
- Allow downloading data and images
- Enable scheduled email delivery
- Provide shareable links with filters preserved

## Common Visualization Mistakes

### Misleading Visualizations

**Truncated Y-Axis**
- Problem: Exaggerates small differences
- Solution: Start at zero for bar charts
- Exception: Line charts can use non-zero start if clearly labeled

**Inconsistent Scales**
- Problem: Multiple charts with different y-axes
- Solution: Use same scale when comparing similar metrics
- Exception: Label clearly if different scales necessary

**Cherry-Picked Data**
- Problem: Showing only favorable time periods or segments
- Solution: Show complete picture with context

**3D Charts**
- Problem: Distort perception, hard to read exact values
- Solution: Use 2D charts - they're clearer

**Dual Axes**
- Problem: Can create misleading correlations
- Solution: Use separate charts or normalize to common scale
- Exception: OK when clearly labeled and relationship is meaningful

### Readability Issues

**Too Many Categories**
- Problem: Cluttered pie chart or bar chart
- Solution: Group small categories into "Other", use top N

**Overlapping Labels**
- Problem: Unreadable axis labels
- Solution: Rotate labels, abbreviate, or use horizontal bars

**Insufficient Contrast**
- Problem: Light colors on white background
- Solution: Ensure WCAG contrast ratios (4.5:1 minimum)

**Decorative Elements**
- Problem: Chart junk that doesn't add information
- Solution: Remove gridlines, backgrounds, 3D effects, unnecessary borders

## Tools and Platforms

### Python

**Matplotlib**
- Pros: Highly customizable, extensive control
- Cons: Verbose syntax, less attractive defaults
- Use for: Custom visualizations, publication-quality figures

**Seaborn**
- Pros: Beautiful defaults, statistical visualizations
- Cons: Less flexible than matplotlib
- Use for: Quick statistical plots, attractive aesthetics

**Plotly**
- Pros: Interactive, web-ready, attractive
- Cons: Larger file sizes
- Use for: Interactive dashboards, web applications

**Altair**
- Pros: Declarative syntax, Vega-Lite based
- Cons: Smaller community than matplotlib
- Use for: Clean, grammar-based visualizations

### R

**ggplot2**
- Pros: Grammar of graphics, highly flexible, beautiful
- Cons: Learning curve
- Use for: Publication-quality visualizations

**Plotly R**
- Pros: Interactive, web-ready
- Use for: Interactive dashboards in R

### BI Tools

**Tableau**
- Pros: Intuitive drag-and-drop, powerful, beautiful
- Cons: Expensive, proprietary
- Use for: Enterprise dashboards, self-service analytics

**Power BI**
- Pros: Microsoft ecosystem integration, affordable
- Cons: Less elegant than Tableau
- Use for: Organizations using Microsoft stack

**Looker**
- Pros: Strong data modeling, embedded analytics
- Cons: Requires SQL/LookML knowledge
- Use for: Data-driven organizations, embedded BI

**Metabase/Redash**
- Pros: Open source, free, SQL-based
- Cons: Less polished than commercial tools
- Use for: Startups, internal dashboards

### Specialized Tools

**D3.js**
- Pros: Ultimate customization for web visualizations
- Cons: Steep learning curve
- Use for: Custom, highly interactive web visualizations

**Flourish**
- Pros: Beautiful templates, easy to use
- Cons: Limited customization
- Use for: Quick, attractive visualizations for presentations

## Best Practices Checklist

**Before Creating:**
- [ ] Identify the key insight or question
- [ ] Know your audience and their needs
- [ ] Choose appropriate chart type for data and message

**Design:**
- [ ] Use clear, descriptive title
- [ ] Label axes with units
- [ ] Start bar chart y-axis at zero
- [ ] Use appropriate color scheme
- [ ] Ensure accessibility (colorblind-friendly)
- [ ] Remove chart junk and unnecessary elements

**Context:**
- [ ] Provide benchmark or comparison (vs. target, last period)
- [ ] Annotate key events or outliers
- [ ] Include data source and time period
- [ ] Add interpretation or recommendation

**Testing:**
- [ ] Show to a colleague - is it immediately clear?
- [ ] Check on different devices/screen sizes
- [ ] Verify data accuracy
- [ ] Test interactivity (if applicable)

## Advanced Techniques

**Small Multiples**
- Display same chart type for different segments
- Easier to compare than overlaid lines
- Example: Monthly trend for each product line

**Slope Chart**
- Show change between two time points
- Clearer than line chart for just two points
- Example: Market share change from 2023 to 2024

**Waterfall Chart**
- Show cumulative effect of sequential values
- Excellent for variance analysis
- Example: Revenue bridge from last year to this year

**Sankey Diagram**
- Show flow and transformation
- Example: Customer journey from awareness to purchase

**Bullet Chart**
- Compact KPI display with target and ranges
- Alternative to gauges (which waste space)
- Example: Sales vs. target with good/fair/poor ranges

## Resources for Inspiration

- **Storytelling with Data** by Cole Nussbaumer Knaflic
- **The Visual Display of Quantitative Information** by Edward Tufte
- **Financial Times Visual Vocabulary** - chart selection guide
- **Data to Viz** - interactive chart chooser
- **ColorBrewer** - colorblind-safe color schemes
- **Observable** - D3.js examples and tutorials

## Key Takeaways

1. Choose chart type based on your data and message, not aesthetics
2. Simplify - remove everything that doesn't add information
3. Use color purposefully and sparingly
4. Make it accessible - consider colorblindness and screen readers
5. Provide context - benchmarks, trends, annotations
6. Test with your audience - if it's not immediately clear, simplify further
7. Tell a story - guide the viewer to the insight
