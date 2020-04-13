const express = require("express");
const app = express();
const path = require('path')
const fs = require('fs')

app.get("/project :id", (req, res)=>{
    console.log(req);
    res.sendFile(path.join(__dirname, "project.html"));
})
app.post("/", (req, res)=>{
    fs.sendFile(path.join(__dirname, "data2.json"), "utf-8", (err, data)=>{
        res.send(data);

    })

app.listen(3000, (err)=>{
    console.log("Server started successfully.");
})
    
})

    //const  id = request.params.employee;
    //console.log(req.query);
    // res.sendfile(path.join(__dirname, "employee.json"));
    // findUserById(id, function(error, id) {
    //     if (error) return next(error);
    //     return response.render('id', id);
      
    
    // });

// for (const key in req.query) {
//     console.log(key, req.query[id])
//   }

