from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__)

@api.route('/items', methods=['GET'])
def get_items():
    # Logic to retrieve items from the database
    return jsonify({"items": []})

@api.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    # Logic to create a new item in the database
    return jsonify({"item": data}), 201

@api.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    # Logic to retrieve a specific item by ID from the database
    return jsonify({"item": {"id": item_id}})

@api.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    # Logic to update an existing item in the database
    return jsonify({"item": {"id": item_id, **data}})

@api.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    # Logic to delete an item from the database
    return jsonify({"message": "Item deleted"}), 204