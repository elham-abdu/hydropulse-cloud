import pandas as pd
import numpy as np

def clean_and_split_data(input_csv_path, output_processed_path):
    df = pd.read_csv(input_csv_path)
    
    # 1. Identify and set time column automatically
    time_cols = [c for c in df.columns if 'time' in c.lower() or 'date' in c.lower()]
    if time_cols:
        time_col = time_cols[0]
        df[time_col] = pd.to_datetime(df[time_col])
        df = df.sort_values(time_col).set_index(time_col)
    
    # 2. Handle missing values & resample
    df_clean = df.ffill().bfill()
    df_clean.to_csv(output_processed_path)
    
    # 3. Chronological Train (70%) / Test (30%) Split
    split_idx = int(len(df_clean) * 0.70)
    train_df = df_clean.iloc[:split_idx]
    test_df = df_clean.iloc[split_idx:]
    
    return train_df, test_df

if __name__ == "__main__":
    train, test = clean_and_split_data(
        'ml/data/raw/L-TOWN_pressures.csv', 
        'ml/data/processed/cleaned_telemetry.csv'
    )
    print("Data processing complete.")