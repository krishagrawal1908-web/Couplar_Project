const express = require("express");
const dotenv = require("dotenv").config();
const dbconnect = require("./config/dbconnect");
const authRoutes = require("../src/routes/authRoutes");
const userRoutes = require("../src/routes/userRoutes");
dbconnect();

const app = express();

//Middle Wares

app.use(express.json());

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);    

//Start the Server
const port =  process.env.port || 7002;
app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
} );