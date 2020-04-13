const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")

app.get("/employee :id", (req, res)=>{
    
    res.sendFile(path.join(__dirname, "employee.html"));

    // findUserById(id, function(error, id) {
    // res.send(req.params);
    //     if (error) return next(error);
    //     return response.render('id', id);
         
})
app.post("/", (req, res)=>{
    fs.sendFile(path.join(__dirname, "data2.json"), "utf-8", (err, data)=>{
        res.send(data);

    })

app.listen(3000, (err)=>{
    console.log("Server started successfully.");
})
});

