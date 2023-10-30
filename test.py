from flask import Flask, request, jsonify
import json 
from flask_cors import CORS
from difflib import get_close_matches

app = Flask(__name__)
CORS(app)

def load_knowledge_base(file_path: str) -> dict:
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def save_knowledge_base(file_path: str, data: dict):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=2)

def find_best_match(user_question: str, questions: list[str]) -> str or None:
    matches = get_close_matches(user_question, questions, n=1, cutoff=0.6)
    return matches[0] if matches else None

def get_answer_for_question(question: str, knowledge_base: dict) -> str or None:
    for q in knowledge_base["questions"]:
        if q["question"] == question:
            return q["answer"]

@app.route('/send', methods=['POST'])
def send():
    data = request.get_json()
    user_input = data.get('message')
    knowledge_base = load_knowledge_base('knowledge_base.json')
    best_match = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

    if best_match:
        bot_response = get_answer_for_question(best_match, knowledge_base)
    else:
        bot_response = 'I do not know the answer. Can you teach me?'
        new_answer = data.get('new_answer')
        if new_answer and new_answer.lower() != 'skip':
            knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
            save_knowledge_base('knowledge_base.json', knowledge_base)
            bot_response = 'Thank you! I learned a new response.'

    return jsonify({'message': bot_response})


if __name__ == '__main__':
    app.run(debug=True)
