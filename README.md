# Insurance_Machine Learning Project

# Machine Learning Project 01: Insurance Data Analysis

## 📌 Project Overview

This project focuses on analyzing medical insurance data to understand the factors that influence insurance charges. It uses Python-based data analysis and statistical techniques to explore relationships between demographic characteristics, health-related attributes, smoking habits, and medical insurance costs.

The project covers the complete initial machine learning workflow, including Exploratory Data Analysis (EDA), data cleaning, feature engineering, categorical encoding, feature scaling, and statistical feature selection.

## 🎯 Objectives

- Understand the structure and distribution of insurance data.
- Perform Exploratory Data Analysis (EDA) using visualizations and descriptive statistics.
- Identify missing values and remove duplicate records.
- Convert categorical variables into numerical representations.
- Create BMI categories using feature engineering.
- Analyze relationships between features and insurance charges.
- Apply Pearson correlation and Chi-square statistical tests for feature analysis.
- Prepare a cleaned dataset for subsequent machine learning modeling.

## 🛠️ Technologies Used

- **Python** – Programming language
- **Pandas** – Data manipulation and analysis
- **NumPy** – Numerical computing
- **Matplotlib** – Data visualization
- **Seaborn** – Statistical visualization
- **Scikit-learn** – Feature scaling with StandardScaler
- **SciPy** – Pearson correlation and Chi-square statistical tests
- **Jupyter Notebook** – Interactive development and analysis

## 📂 Dataset Description

The project uses the `insurance.csv` dataset, which contains information about individuals and their medical insurance expenses.

| Feature | Description |
|---|---|
| `age` | Age of the individual |
| `sex` | Gender of the individual |
| `bmi` | Body Mass Index |
| `children` | Number of dependent children |
| `smoker` | Smoking status |
| `region` | Residential region |
| `charges` | Medical insurance charges |

**Target variable:** `charges`

The goal of the analysis is to investigate which characteristics are associated with differences in medical insurance costs.

## 🔍 Project Workflow

### 1. Exploratory Data Analysis (EDA)

- Inspected dataset dimensions, columns, data types, and summary statistics.
- Checked for missing values.
- Analyzed numerical feature distributions using histograms.
- Examined categorical feature counts.
- Used boxplots to investigate outliers.
- Created a correlation heatmap to explore relationships between numerical variables.

### 2. Data Cleaning and Preprocessing

- Created a copy of the original dataset.
- Removed duplicate records.
- Checked missing values and data types.
- Encoded the `sex` column into a binary numerical feature.
- Encoded the `smoker` column into a binary numerical feature.
- Renamed the encoded columns to `is_female` and `is_smoker`.
- Applied one-hot encoding to the `region` column.

### 3. Feature Engineering

Created a new categorical feature, `bmi_category`, from BMI values.

The BMI categories include:

- Underweight
- Normal
- Overweight
- Obese

The categorical BMI feature was converted into dummy variables using one-hot encoding.

### 4. Feature Scaling

Applied `StandardScaler` to the following numerical features:

- `age`
- `bmi`
- `children`

This standardizes the selected features to improve consistency in their numerical scales.

### 5. Statistical Feature Analysis

**Pearson Correlation**

Calculated Pearson correlation coefficients between selected features and insurance charges to examine linear relationships.

**Chi-square Test**

Applied the Chi-square test of independence to categorical features and quartile-based insurance charge groups.

The significance level was set to `0.05` to evaluate statistical associations.

### 6. Final Feature Selection

Created a final dataset containing selected features:

- `age`
- `is_female`
- `bmi`
- `children`
- `is_smoker`
- `charges`
- `region_southeast`
- `bmi_category_Obese`

This dataset serves as a starting point for subsequent predictive modeling.

## 📊 Key Analysis Areas

The project investigates the following questions:

- How are insurance charges distributed?
- How do age and BMI relate to insurance expenses?
- What differences appear between smokers and non-smokers?
- Does the number of children relate to insurance charges?
- How do insurance charges vary across regions?
- Which features show statistical associations with insurance charges?

## 🚀 Getting Started

### Prerequisites

Install Python and Jupyter Notebook. The required libraries can be installed using:

```bash
pip install numpy pandas seaborn matplotlib scipy scikit-learn jupyter
```

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/Machine-Learning-Insurance-Analysis.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Machine-Learning-Insurance-Analysis
   ```

3. Place the `insurance.csv` dataset in the appropriate working directory.

4. Launch Jupyter Notebook:

   ```bash
   jupyter notebook
   ```

5. Open the project notebook and execute the cells in order.

## 📁 Suggested Repository Structure

```text
Machine-Learning-Insurance-Analysis/
│
├── insurance.csv
├── Insurance_Analysis.ipynb
├── README.md
└── requirements.txt
```

## 🔮 Future Improvements

- Build regression models to predict medical insurance charges.
- Compare Linear Regression, Decision Tree, Random Forest, and other regression algorithms.
- Evaluate model performance using MAE, MSE, RMSE, and R².
- Use cross-validation and a proper train-test split.
- Improve feature selection and compare model performance with and without engineered features.
- Develop a simple web application for insurance charge prediction.

## 📚 Learning Outcomes

Through this project, I practiced:

- Data exploration and visualization.
- Data cleaning and preprocessing.
- Categorical variable encoding.
- Feature engineering and scaling.
- Statistical hypothesis testing.
- Correlation-based feature analysis.
- Preparing data for machine learning workflows.

## 👨‍💻 Author

**Rahul Kumar Singh**

B.Sc. Computer Science and Data Analytics | IIT Patna

GitHub: [RAHUL8687](https://github.com/RAHUL8687)

---

⭐ If you find this project useful, consider giving the repository a star!
