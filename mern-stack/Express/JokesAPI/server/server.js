const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require("./config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./routes/user.routes");

AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );

console.log("Username:", process.env.ATLAS_USERNAME);
console.log("Password:", process.env.ATLAS_PASSWORD ? "✅ Loaded" : "❌ Missing");
console.log("DB Name:", process.env.DB);
console.log("PORT:", process.env.PORT);