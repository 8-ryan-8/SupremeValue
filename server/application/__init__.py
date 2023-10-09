from flask import Flask
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv, dotenv_values

load_dotenv()

print(os.getenv("SECRET_KEY"))
print(os.getenv("MONGO_URI"))

app = Flask(__name__)
app.config["SECRET_KEY"] = #insert SECRET_KEY  
app.config["MONGO_URI"] = #insert MONGO_URI

mongodb_client = PyMongo(app)
db = mongodb_client.db

from application import routes

# uri = "mongodb+srv://ryanhuie88:PvHDyfapWUzjcuRC@supremevaluecluster.vtmp6je.mongodb.net/?retryWrites=true&w=majority"

#home
# @app.route("/api")
# def members():
#     return {"members": ["Member 1", "Member 2", "Member 6"]}

# if __name__ == "__main__":
#     app.run(debug=True, port=8080)