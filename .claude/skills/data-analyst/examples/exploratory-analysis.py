"""
Exploratory Data Analysis (EDA) Template
Complete workflow for analyzing a dataset with pandas

This example demonstrates:
- Data loading and initial inspection
- Data quality assessment
- Summary statistics
- Distribution analysis
- Correlation analysis
- Visualization of key patterns
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

# Set visualization style
sns.set_style("whitegrid")
plt.rcParams['figure.figsize'] = (12, 6)

# ============================================================================
# 1. DATA LOADING
# ============================================================================

# Load data from various sources
# df = pd.read_csv('data.csv')
# df = pd.read_excel('data.xlsx')
# df = pd.read_sql('SELECT * FROM table', connection)

# Example with sample data
np.random.seed(42)
df = pd.DataFrame({
    'customer_id': range(1, 1001),
    'age': np.random.randint(18, 75, 1000),
    'income': np.random.normal(50000, 20000, 1000),
    'purchase_amount': np.random.exponential(100, 1000),
    'visits': np.random.poisson(5, 1000),
    'satisfaction': np.random.choice([1, 2, 3, 4, 5], 1000),
    'segment': np.random.choice(['A', 'B', 'C'], 1000),
    'churned': np.random.choice([0, 1], 1000, p=[0.8, 0.2])
})

# Introduce some missing values for demonstration
df.loc[df.sample(frac=0.05).index, 'income'] = np.nan
df.loc[df.sample(frac=0.02).index, 'satisfaction'] = np.nan

print("Data loaded successfully!")
print(f"Shape: {df.shape}")

# ============================================================================
# 2. INITIAL INSPECTION
# ============================================================================

print("\n" + "="*80)
print("INITIAL INSPECTION")
print("="*80)

# First few rows
print("\nFirst 5 rows:")
print(df.head())

# Data types and non-null counts
print("\nData info:")
print(df.info())

# Column names
print("\nColumn names:")
print(df.columns.tolist())

# ============================================================================
# 3. DATA QUALITY ASSESSMENT
# ============================================================================

print("\n" + "="*80)
print("DATA QUALITY ASSESSMENT")
print("="*80)

# Missing values
print("\nMissing values:")
missing = pd.DataFrame({
    'Column': df.columns,
    'Missing_Count': df.isnull().sum(),
    'Missing_Percent': (df.isnull().sum() / len(df) * 100).round(2)
})
print(missing[missing['Missing_Count'] > 0])

# Duplicates
print(f"\nDuplicate rows: {df.duplicated().sum()}")

# Data types
print("\nData types:")
print(df.dtypes)

# Unique values for categorical columns
print("\nUnique values in categorical columns:")
categorical_cols = df.select_dtypes(include=['object', 'category']).columns
for col in categorical_cols:
    print(f"{col}: {df[col].nunique()} unique values")
    if df[col].nunique() < 10:
        print(f"  Values: {df[col].value_counts().to_dict()}")

# ============================================================================
# 4. SUMMARY STATISTICS
# ============================================================================

print("\n" + "="*80)
print("SUMMARY STATISTICS")
print("="*80)

# Numerical columns
print("\nNumerical columns:")
print(df.describe())

# Percentiles
print("\nKey percentiles:")
numerical_cols = df.select_dtypes(include=[np.number]).columns
for col in numerical_cols:
    if col != 'customer_id':  # Skip ID columns
        print(f"\n{col}:")
        print(df[col].quantile([0.01, 0.05, 0.25, 0.50, 0.75, 0.95, 0.99]))

# Categorical columns
print("\nCategorical columns:")
for col in categorical_cols:
    print(f"\n{col} distribution:")
    print(df[col].value_counts())
    print(f"Percentage:")
    print(df[col].value_counts(normalize=True) * 100)

# ============================================================================
# 5. DISTRIBUTION ANALYSIS
# ============================================================================

print("\n" + "="*80)
print("DISTRIBUTION ANALYSIS")
print("="*80)

# Skewness and kurtosis
print("\nSkewness and Kurtosis:")
for col in numerical_cols:
    if col != 'customer_id':
        skew = df[col].skew()
        kurt = df[col].kurtosis()
        print(f"{col}:")
        print(f"  Skewness: {skew:.2f} {'(right-skewed)' if skew > 0 else '(left-skewed)'}")
        print(f"  Kurtosis: {kurt:.2f} {'(heavy-tailed)' if kurt > 0 else '(light-tailed)'}")

# Normality tests
print("\nNormality tests (Shapiro-Wilk):")
for col in numerical_cols:
    if col != 'customer_id':
        # Use sample if dataset is large
        sample = df[col].dropna().sample(min(5000, len(df))) if len(df) > 5000 else df[col].dropna()
        statistic, p_value = stats.shapiro(sample)
        print(f"{col}: p-value = {p_value:.4f} {'(Normal)' if p_value > 0.05 else '(Not Normal)'}")

# Visualize distributions
fig, axes = plt.subplots(2, 3, figsize=(15, 10))
axes = axes.flatten()

plot_idx = 0
for col in numerical_cols:
    if col != 'customer_id' and plot_idx < 6:
        axes[plot_idx].hist(df[col].dropna(), bins=30, edgecolor='black', alpha=0.7)
        axes[plot_idx].set_title(f'Distribution of {col}')
        axes[plot_idx].set_xlabel(col)
        axes[plot_idx].set_ylabel('Frequency')
        axes[plot_idx].axvline(df[col].mean(), color='red', linestyle='--', label='Mean')
        axes[plot_idx].axvline(df[col].median(), color='green', linestyle='--', label='Median')
        axes[plot_idx].legend()
        plot_idx += 1

plt.tight_layout()
plt.savefig('distributions.png', dpi=300, bbox_inches='tight')
print("\nDistribution plots saved as 'distributions.png'")

# ============================================================================
# 6. OUTLIER DETECTION
# ============================================================================

print("\n" + "="*80)
print("OUTLIER DETECTION")
print("="*80)

# IQR method
for col in numerical_cols:
    if col != 'customer_id':
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR

        outliers = df[(df[col] < lower_bound) | (df[col] > upper_bound)]
        print(f"\n{col}:")
        print(f"  Lower bound: {lower_bound:.2f}")
        print(f"  Upper bound: {upper_bound:.2f}")
        print(f"  Outliers: {len(outliers)} ({len(outliers)/len(df)*100:.1f}%)")

# Box plots for outlier visualization
fig, axes = plt.subplots(2, 3, figsize=(15, 8))
axes = axes.flatten()

plot_idx = 0
for col in numerical_cols:
    if col != 'customer_id' and plot_idx < 6:
        axes[plot_idx].boxplot(df[col].dropna())
        axes[plot_idx].set_title(f'Box Plot: {col}')
        axes[plot_idx].set_ylabel(col)
        plot_idx += 1

plt.tight_layout()
plt.savefig('outliers.png', dpi=300, bbox_inches='tight')
print("\nBox plots saved as 'outliers.png'")

# ============================================================================
# 7. CORRELATION ANALYSIS
# ============================================================================

print("\n" + "="*80)
print("CORRELATION ANALYSIS")
print("="*80)

# Correlation matrix
numerical_features = df.select_dtypes(include=[np.number]).drop('customer_id', axis=1, errors='ignore')
correlation_matrix = numerical_features.corr()

print("\nCorrelation matrix:")
print(correlation_matrix)

# Strong correlations
print("\nStrong correlations (|r| > 0.5):")
for i in range(len(correlation_matrix.columns)):
    for j in range(i+1, len(correlation_matrix.columns)):
        corr_value = correlation_matrix.iloc[i, j]
        if abs(corr_value) > 0.5:
            print(f"{correlation_matrix.columns[i]} vs {correlation_matrix.columns[j]}: {corr_value:.3f}")

# Correlation heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0,
            square=True, linewidths=1, cbar_kws={"shrink": 0.8})
plt.title('Correlation Heatmap')
plt.tight_layout()
plt.savefig('correlation_heatmap.png', dpi=300, bbox_inches='tight')
print("\nCorrelation heatmap saved as 'correlation_heatmap.png'")

# ============================================================================
# 8. SEGMENTATION ANALYSIS
# ============================================================================

print("\n" + "="*80)
print("SEGMENTATION ANALYSIS")
print("="*80)

# Group by categorical variable
if 'segment' in df.columns:
    print("\nMetrics by segment:")
    segment_summary = df.groupby('segment').agg({
        'age': ['mean', 'median'],
        'income': ['mean', 'median'],
        'purchase_amount': ['mean', 'median', 'sum'],
        'visits': ['mean', 'sum']
    }).round(2)
    print(segment_summary)

    # Visualization
    fig, axes = plt.subplots(2, 2, figsize=(14, 10))

    df.groupby('segment')['purchase_amount'].mean().plot(kind='bar', ax=axes[0,0], color='skyblue')
    axes[0,0].set_title('Average Purchase Amount by Segment')
    axes[0,0].set_ylabel('Purchase Amount')

    df.groupby('segment')['age'].mean().plot(kind='bar', ax=axes[0,1], color='lightcoral')
    axes[0,1].set_title('Average Age by Segment')
    axes[0,1].set_ylabel('Age')

    df.groupby('segment').size().plot(kind='bar', ax=axes[1,0], color='lightgreen')
    axes[1,0].set_title('Customer Count by Segment')
    axes[1,0].set_ylabel('Count')

    df.groupby('segment')['churned'].mean().plot(kind='bar', ax=axes[1,1], color='orange')
    axes[1,1].set_title('Churn Rate by Segment')
    axes[1,1].set_ylabel('Churn Rate')

    plt.tight_layout()
    plt.savefig('segment_analysis.png', dpi=300, bbox_inches='tight')
    print("\nSegment analysis plots saved as 'segment_analysis.png'")

# ============================================================================
# 9. KEY INSIGHTS SUMMARY
# ============================================================================

print("\n" + "="*80)
print("KEY INSIGHTS SUMMARY")
print("="*80)

print(f"""
Dataset Overview:
- Total records: {len(df):,}
- Features: {len(df.columns)}
- Missing data: {df.isnull().sum().sum()} cells ({df.isnull().sum().sum()/(len(df)*len(df.columns))*100:.1f}%)
- Duplicates: {df.duplicated().sum()}

Key Metrics:
- Average age: {df['age'].mean():.1f} years
- Average income: ${df['income'].mean():,.2f}
- Average purchase: ${df['purchase_amount'].mean():.2f}
- Average visits: {df['visits'].mean():.1f}
- Churn rate: {df['churned'].mean()*100:.1f}%

Recommendations for Further Analysis:
1. Investigate outliers in purchase_amount
2. Handle missing values in income and satisfaction
3. Perform deeper segmentation analysis
4. Build predictive models for churn
5. Analyze time series trends if temporal data available
""")

print("\n" + "="*80)
print("EDA COMPLETE")
print("="*80)
