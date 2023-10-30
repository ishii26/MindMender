from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import json
from flask_cors import CORS
import openai    


app = Flask(__name__)

openai.api_key = "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"

# Configure MongoDB
app.config['MONGO_URI'] = 'mongodb+srv://yathharthk9:Pass123@cluster0.ooxb61z.mongodb.net/ForMpr'
CORS(app)
mongo = PyMongo(app)

messages = [
    {"role": "system", "content": "You are a helpful chatbot"}
]

@app.route('/api/ask', methods=['POST'])
def ask():
    data = request.json
    messages.append({"role": "user", "content": data['prompt']})
    print(data)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0,
        max_tokens=500
    )
    print(response.choices[0].message['content'])
    messages.append({"role": "assistant", "content": response.choices[0].message['content']})
    conversation_json = json.load(response.choices[0].message['content'])
    print(conversation_json)
    return jsonify({"output": conversation_json})


@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    # Basic data validation
    if not data.get('name') or not data.get('email') or not data.get('pass'):
        return jsonify({"error": "Missing required fields"}), 400

    # Check if the email is already registered
    existing_user = mongo.db.users.find_one({"email": data['email']})
    if existing_user:
        return jsonify({"error": "Email is already registered"}), 400

    # You can add more specific validation here

    # If all validation passes, save data to MongoDB
    new_user = {
        "name": data['name'],
        "email": data['email'],
        "password": data['pass']
        # Add other user fields as needed
    }

    mongo.db.users.insert_one(new_user)

    return jsonify({"message": "User signed up successfully"})

if __name__ == '__main__':
    app.run(debug=True)
