import requests

# function to  fect a user from https://randomuser.me/api/
def fetch_user():
    response = requests.get('https://randomuser.me/api/')
    return response.json()

# function print user data
def print_user(user):
    print('Name:', user['name']['first'], user['name']['last'])
    print('Email:', user['email'])
    print('Location:', user['location']['city'], user['location']['state'])

user = fetch_user()
print_user(user['results'][0])