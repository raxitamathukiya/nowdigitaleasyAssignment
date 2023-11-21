const express = require("express");
const {connection}=require("./config/db");
const {userRoutes}=require('./Routes/user.routes')
require("dotenv").config()
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/',async(req,res)=>{
    try {
       res.send('Welcome to API') 
    } catch (error) {
        console.log(error)
    }
})
app.use(express.json());
app.use('/user',userRoutes)
app.listen(process.env.PORT,async()=>{
    try {
        connection;
        console.log("connected to DB");
        console.log("server is running"); 
    } catch (err) {
        throw new Error("failed to connect");
    }
})
