const mongoose = require('mongoose');

const dbName = process.env.DB;

const username = process.env.ATLAS_USERNAME;

const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://Khaseeb:Khaseeb123@khaseeb.zfuefck.mongodb.net/?retryWrites=true&w=majority&appName=Khaseeb`;

mongoose.connect(uri)

    .then(() => console.log("Established a connection to the database"))

    .catch(err => console.log("Something went wrong when connecting to the database", err));

// We will also need the username and password we set up for our Atlas account. However, it is not secure for us to just write the password openly into our code for potentially the whole world to see! That's why we created a .env file earlier, to store some of our private information. Let's update our .env file now!


