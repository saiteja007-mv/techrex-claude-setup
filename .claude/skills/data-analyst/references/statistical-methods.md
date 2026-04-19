# Statistical Methods Reference

Comprehensive guide to statistical tests, assumptions, interpretation, and when to use each method.

## Descriptive Statistics

### Measures of Central Tendency

**Mean (Average)**
- When to use: Normally distributed data without extreme outliers
- Formula: Sum of all values / Number of values
- Interpretation: The typical or average value
- Caution: Sensitive to outliers; use median for skewed distributions

**Median**
- When to use: Skewed distributions or when outliers are present
- Formula: Middle value when data is sorted
- Interpretation: 50th percentile; half the values are above, half below
- Advantage: Robust to outliers

**Mode**
- When to use: Categorical data or identifying most common values
- Definition: Most frequently occurring value
- Note: Data can be bimodal (two modes) or multimodal

### Measures of Spread

**Standard Deviation (SD)**
- When to use: Quantifying variability in normally distributed data
- Interpretation: Average distance from the mean
- Rule of thumb: ~68% of data within 1 SD, ~95% within 2 SD (for normal distributions)

**Interquartile Range (IQR)**
- When to use: Measuring spread in skewed distributions
- Formula: Q3 - Q1 (75th percentile minus 25th percentile)
- Advantage: Robust to outliers
- Use case: Outlier detection (values < Q1 - 1.5*IQR or > Q3 + 1.5*IQR)

## Hypothesis Testing Framework

**P-value Interpretation:**
- p < 0.05: Typically considered statistically significant
- p < 0.01: Strong evidence against null hypothesis
- p > 0.05: Fail to reject null hypothesis (not "accept" null)
- Caution: Statistical significance ≠ practical significance

**Confidence Intervals:**
- 95% CI: Range likely to contain the true population parameter
- Narrower CI = More precise estimate
- Always report alongside p-values

**Effect Sizes:**
- Cohen's d: Standardized difference between means
- Correlation coefficient (r): Strength of relationship
- Odds ratio: Relative likelihood in logistic regression
- Critical: Report effect sizes, not just p-values

## Comparing Groups

### T-Tests

**Independent Samples T-Test**
- Purpose: Compare means of two independent groups
- Assumptions: Continuous outcome, independence, normality, equal variances
- Example: Compare average purchase amount between men and women
- Alternative if assumptions violated: Mann-Whitney U test

**Paired Samples T-Test**
- Purpose: Compare means of same group at two time points
- Example: Compare blood pressure before and after treatment
- Assumption: Paired observations, normal distribution of differences
- Alternative: Wilcoxon signed-rank test

**Welch's T-Test**
- Use when: Variances are unequal between groups
- Advantage: More robust to heterogeneity of variance

### ANOVA

**One-Way ANOVA**
- Purpose: Compare means across 3+ independent groups
- Assumptions: Independence, normality, homogeneity of variance
- Follow-up: Post-hoc tests (Tukey HSD, Bonferroni) to identify which groups differ
- Alternative: Kruskal-Wallis H test

**Two-Way ANOVA**
- Purpose: Examine effects of two independent variables and their interaction
- Interpretation: Interaction significant = effect of one variable depends on the other

## Testing Relationships

### Correlation

**Pearson Correlation (r)**
- Purpose: Measure linear relationship strength
- Range: -1 (perfect negative) to +1 (perfect positive)
- Interpretation: |r| < 0.3 weak, 0.3-0.7 moderate, >0.7 strong
- Caution: Correlation ≠ causation
- Assumptions: Continuous variables, linear relationship, bivariate normality

**Spearman's Rank Correlation**
- Use when: Ordinal data, non-linear monotonic relationships, or outliers present
- Advantage: More robust to outliers than Pearson

### Chi-Square Test

**Chi-Square Test of Independence**
- Purpose: Test association between two categorical variables
- Example: Test if purchase behavior differs by customer segment
- Assumption: Expected cell frequencies ≥ 5
- Effect size: Cramér's V or Phi coefficient

## Regression Analysis

### Linear Regression

**Simple Linear Regression**
- Equation: Y = β₀ + β₁X + ε
- Output: R² (variance explained), β coefficients, p-values
- Assumptions: Linearity, independence, homoscedasticity, normality of residuals
- Interpretation: "For every 1-unit increase in X, Y changes by β₁ units"

**Multiple Linear Regression**
- Multiple predictors: Y = β₀ + β₁X₁ + β₂X₂ + ... + ε
- Check multicollinearity: VIF (variance inflation factor) should be < 10
- Model comparison: Adjusted R², AIC, BIC

### Logistic Regression

- Purpose: Model binary outcome (yes/no, 0/1)
- Output: Odds ratios
- Interpretation: "Each 1-unit increase in X multiplies the odds of Y by e^β"
- Evaluation: ROC curve, AUC, confusion matrix

## Time Series Analysis

**Components:**
- Trend: Long-term increase/decrease
- Seasonality: Regular periodic fluctuations
- Cyclical: Longer-term fluctuations
- Random: Unexplained variation

**Forecasting Methods:**
- Moving Average: Average of last N periods
- Exponential Smoothing: Weighted average favoring recent data
- ARIMA: Combines autoregression, differencing, and moving average
- Seasonal Decomposition: Separate trend, seasonal, and residual components

## Sample Size Determination

**Factors:**
- Desired power (typically 80% or 90%)
- Significance level (typically 0.05)
- Expected effect size
- Population variability

**Rules of Thumb:**
- T-tests: Minimum ~30 per group
- Regression: 10-15 observations per predictor
- Proportions: np and n(1-p) both ≥ 10

## Common Pitfalls

**Multiple Testing Problem**
- Conducting many tests increases false positive rate
- Solutions: Bonferroni correction, FDR control, pre-specify hypotheses

**Confounding Variables**
- Third variable affecting both predictor and outcome
- Creates spurious correlations
- Solutions: Control in regression, randomization, stratification

**Simpson's Paradox**
- Trend reverses when data is aggregated
- Always examine subgroups

**P-Hacking**
- Testing multiple hypotheses and only reporting significant ones
- Prevention: Pre-register analysis plan, report all tests

## Practical Recommendations

1. Always visualize data first - plots reveal patterns tests might miss
2. Check assumptions - use diagnostic plots and tests
3. Report effect sizes and confidence intervals - not just p-values
4. Consider practical significance - statistical significance doesn't mean important
5. Use appropriate tests for data type - parametric vs. non-parametric
6. Account for multiple testing - when conducting many tests
7. Document your process - ensure reproducibility
8. Consult domain experts - statistical significance needs business context

## Software Implementation

**Python:**
- scipy.stats: T-tests, ANOVA, chi-square, correlations
- statsmodels: Regression, time series, advanced tests
- pingouin: User-friendly stats with effect sizes

**R:**
- stats: Built-in tests (t.test, aov, lm, cor.test)
- car: ANOVA diagnostics
- forecast: Time series
- pwr: Power analysis

**Excel:**
- T.TEST, CHISQ.TEST, CORREL functions
- Analysis ToolPak for regression and ANOVA
- Limited compared to Python/R but accessible
