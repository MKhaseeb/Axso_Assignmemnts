from flask import Flask, render_template
app = Flask(__name__)    


@app.route('/')          
def hello_world():
    return 'Hello World!'  

@app.route('/Champion')         
def Champion():
    return 'Champion!'  

@app.route('/say/<username>')         
def say(username):
    return 'hi ' + username  

@app.route("/Repeat/<int:user_id>/<text>")
def Repeat(text ,user_id ):
        return f" {text * user_id}"

@app.errorhandler(404)
def page_not_found(e):
    return render_template ("404.html"),404


if __name__=="__main__":   
    app.run(debug=True)    