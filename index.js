const express = require("express");
const app = express();

require("dotenv").config();
const bcrypt = require('bcrypt');

const morgan = require('morgan')
app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;

// now using middleware to pass the data



app.use(express.json())

//mount
const user = require("./routes/router");
app.use("/api/v1",user);

// connection with db
const dbconnect = require ("./config/Database");
dbconnect();

// starting the server

app.listen(PORT,()=>{
    console.log(`the app is running successfully on port ${PORT}`);
})

app.get("/",()=>{
    res.send("it seems to working quite seamlessly");
})