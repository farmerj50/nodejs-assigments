const express = require("express");
const Router = express.Router();
const UserModel = require("../model/user");
const { checkUsername } = require("../validator")

Router.get("/", (req, res)=>{
    res.render("get-news", {});
});
// app.get('/',  (req, res)=>{
//     Usermodel.find({}).then((response)=>{
//         return response;
//     })
//     res.render('add-user', {newsAPI: null, error: null});
//   })
Router.get("/", (req, res)=>{
    res.render("index", {});
});
Router.post("/", (req,res)=>{
    const User = new UserModel({
        name : "trump",
        author : "dump",
        title : "trump dump",
        description : "trumpy",
        url : "dumpy"
                    })

  User.save();
  res.render("add-user", {});
    });
                

module.exports = Router;