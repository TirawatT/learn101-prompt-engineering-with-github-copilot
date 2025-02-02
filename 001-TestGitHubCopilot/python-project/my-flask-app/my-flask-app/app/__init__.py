from flask import Flask
from .config import Config
from .api import api as api_blueprint
from .extensions import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    app.register_blueprint(api_blueprint, url_prefix='/api')

    return app