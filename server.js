const express = require("express");
const app = express();
const path = require('path')
const fs = require('fs')

app.get("/", (req, res)=>{
    console.log(req);
    res.sendFile(path.join(__dirname, "person.json"));
})

app.listen(3000, (err)=>{
    console.log("Server started successfully.");
})
