import pandas as pd
import numpy as np
import joblib
import os
from sklearn.ensemble import IsolationForest
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix

def engineer_features(df):
    data = df.copy()
    numeric_cols = data.select_dtypes(include=[np.number]).columns
    
    # Rolling Mean & Rolling Std (window=6)
    for col in numeric_cols:
        data[f'{col}_rolling_mean'] = data[col].rolling(window=6, min_periods=1).mean()
        data[f'{col}_rolling_std'] = data[col].rolling(window=6, min_periods=1).std().fillna(0)
        
    # Rate of Change (First Difference)
    for col in numeric_cols:
        data[f'{col}_roc'] = data[col].diff().fillna(0)
        
    return data

def train_and_evaluate():
    print("--- Week 2: Feature Engineering & Baseline Model Training ---")
    
    # 1. Load cleaned dataset
    raw_path = 'ml/data/processed/cleaned_telemetry.csv'
    if not os.path.exists(raw_path):
        print(f"Error: {raw_path} not found. Running dataset cleaner...")
        raw_path = 'ml/data/raw/L-TOWN_pressures.csv'
        
    df = pd.read_csv(raw_path)
    label_col = 'is_leak' if 'is_leak' in df.columns else None
    
    # 2. Engineer features
    print("Engineering rolling windows and rate-of-change features...")
    df_featured = engineer_features(df)
    
    # 3. Train/Test Split (70/30)
    split_idx = int(len(df_featured) * 0.70)
    train_df = df_featured.iloc[:split_idx]
    test_df = df_featured.iloc[split_idx:]
    
    drop_cols = [c for c in ['timestamp', 'datetime', 'date', label_col] if c in df_featured.columns]
    X_train = train_df.drop(columns=drop_cols)
    X_test = test_df.drop(columns=drop_cols)
    
    # 4. Train Isolation Forest
    print("Training Isolation Forest model...")
    iso_forest = IsolationForest(n_estimators=100, contamination=0.05, random_state=42)
    iso_forest.fit(X_train)
    
    test_preds_raw = iso_forest.predict(X_test)
    test_preds = np.where(test_preds_raw == -1, 1, 0) # 1 = Leak/Anomaly, 0 = Normal
    
    # 5. Save model artifact
    os.makedirs('ml/models', exist_ok=True)
    model_output_path = 'ml/models/isolation_forest_baseline.joblib'
    joblib.dump(iso_forest, model_output_path)
    print(f"Saved model artifact to: {model_output_path}")
    
    # 6. Print Evaluation Numbers
    print("\n================ EVALUATION RESULTS ================")
    if label_col and label_col in test_df.columns:
        y_test = test_df[label_col].values
        precision = precision_score(y_test, test_preds, zero_division=0)
        recall = recall_score(y_test, test_preds, zero_division=0)
        f1 = f1_score(y_test, test_preds, zero_division=0)
        tn, fp, fn, tp = confusion_matrix(y_test, test_preds).ravel()
        fpr = fp / (fp + tn) if (fp + tn) > 0 else 0.0
        
        print(f"Precision:            {precision:.4f}")
        print(f"Recall:               {recall:.4f}")
        print(f"F1 Score:             {f1:.4f}")
        print(f"False Positive Rate:  {fpr:.4f}")
    else:
        num_anomalies = np.sum(test_preds)
        anomaly_pct = (num_anomalies / len(test_preds)) * 100
        print("Dataset Mode: Unsupervised Telemetry (No ground-truth labels)")
        print(f"Total Test Instances: {len(test_preds)}")
        print(f"Detected Anomalies:   {num_anomalies} ({anomaly_pct:.2f}%)")
    

if __name__ == "__main__":
    train_and_evaluate()