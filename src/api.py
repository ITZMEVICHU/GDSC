from flask import Flask, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report as cr

app = Flask(__name__)

# Load the dataset
data = pd.read_csv('data.csv')

# Perform data preprocessing and model training
threshold = [50, 70]

def categorize_eco_rating(eco_rating):
    if eco_rating < threshold[0]:
        return 'negative'
    elif ((eco_rating > threshold[0]) & (eco_rating < threshold[1])):
        return 'neutral'
    else:
        return 'positive'

data['sentiment'] = data['eco_rating'].apply(categorize_eco_rating)

X = data.drop(['sentiment', 'device_type', 'search_name', 'brand', 'model', 'release_date', 'ram_human', 'storage_human', 'model_number_info', 'label_version'], axis=1)
y = data['sentiment']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

sentiment_model = LogisticRegression()
sentiment_model.fit(X_train, y_train)

# API endpoint for sentiment analysis
@app.route('/sentiment-analysis', methods=['POST'])
def sentiment_analysis():
    try:
        data_input = request.json  # Assuming you send data as JSON
        eco_rating = data_input['eco_rating']

        # Use the trained model to predict sentiment
        sentiment_label = categorize_eco_rating(eco_rating)
        sentiment_score = sentiment_model.predict_proba([[eco_rating]])[:, 1]

        return jsonify({
            'sentiment_label': sentiment_label,
            'sentiment_score': float(sentiment_score)
        })
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
