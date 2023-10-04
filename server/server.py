from flask import Flask

app = Flask(__name__)

#home
@app.route("/api")
def members():
    return {"members": ["Member 1", "Member 2", "Member 6"]}

if __name__ == "__main__":
    app.run(debug=True, port=8080)