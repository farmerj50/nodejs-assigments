const express = require("express");
const app = express();
const path = require('path')

app.get("/", (req, res)=>{
    console.log(req);
    res.sendfile(path.join(__dirname, "data.json"));
})
app.listen(5000, (err)=>{
    console.log("Server started successfully.");
})