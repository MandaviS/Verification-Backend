const express = require("express");
const connectdb = require("./connectors/dbconnection");
const app = express();
// We can also write above code as const app = require("express")();
const otpservice = require("./controller/otp");
const userapis = require("./controller/users");
require("dotenv").config();

app.use(express.json()); //to make server accept body from frontend in the form of json

app.use("/api/otp",otpservice);
app.use("/api/user",userapis);

const port = process.env.PORT || 5000; //process.env.PORT gives port of hosted application, which is automatically defined by deployment platform

connectdb().then(()=>{
    app.listen(port,()=>console.log(`Server is running at ${port}`));
});



