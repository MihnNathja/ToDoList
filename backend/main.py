from flask import Flask, request, jsonify
from flask_cors import CORS

# Create a GET route 

app = Flask(__name__)
# Allow CORS
CORS(app)
data = [] 


 
@app.route('/getData', methods=['GET'])
def getData():
    global data

    return data


@app.route('/postData', methods=['POST'])
def postData():
    inputData = request.get_json()  # Get inputData from the JSON request
    data.append(inputData)  # Add the inputData to the dataList
    return jsonify({'message': 'Data received successfully', 'dataList': data}), 200