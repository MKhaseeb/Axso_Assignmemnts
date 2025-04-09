from flask import Flask, render_template, request, redirect, session  # don't forget to import redirect!
app = Flask(__name__)   
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes

@app.route('/')         
def Counter():
        session['username'] = request.form['name']
        session['useremail'] = request.form['email']
        
    return render_template('index.html', request.form )






if __name__=="__main__":    
    app.run(debug=True)    