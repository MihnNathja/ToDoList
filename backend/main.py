from flask import Flask, request, jsonify
from flask_cors import CORS

# Create a GET route 
app = Flask(__name__)

# Allow CORS
CORS(app)

@app.route('/getData', methods=['GET'])
def api():


@app.route('/postData', methods=['POST'])
def api():
