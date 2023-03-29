from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle

classifier = pickle.load(open('model/classifier.pkl','rb'))
vectorizer = pickle.load(open('model/vectorizer.pkl','rb'))

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def home():
    data = 'Wroking !'
    response = jsonify(data)
    return response

@app.route('/predict',methods=['POST'])
def predict():
    req = request.get_json()
    query = req['content']
    vectorize_message = vectorizer.transform([query])
    predict = classifier.predict(vectorize_message)[0]
    if predict == 0:
        return jsonify({'prediction': '0'})
    else:
        return jsonify({'prediction': '1'})
    
if __name__ == '__main__':
	app.run(debug=True, use_reloader=True)