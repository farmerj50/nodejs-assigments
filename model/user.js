const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name : String, 
    email : String,
    createdOn : { type : Date, default : Date.now }
})

const UserModel = new mongoose.model("user", UserSchema, "Users");

module.exports = UserModel;