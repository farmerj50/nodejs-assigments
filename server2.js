const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.get("/", (req, res)=>{
    console.log(req);
    
    res.sendFile(path.join(__dirname, "project.html"))
})

app.post("/", (req, res)=>{
    
    fs.readFile(path.join(__dirname, "data2.json"), "utf-8", (err, data)=>{
        res.send(JSON.parse(data));
    })

})

app.listen(6500, (err)=>{
    console.log("Server started successfully.");
})