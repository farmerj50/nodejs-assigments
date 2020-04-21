const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name : String,
    Author : String, 
    title : String,
    description : String, 
    url : String,
    createdOn : { type : Date, default : Date.now }
})

const UserModel = new mongoose.model("user", UserSchema, "News");

module.exports = UserModel;