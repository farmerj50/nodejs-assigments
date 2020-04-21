const UserModel = require("../model/user")

function Users()
    {
        return UserModel.find({})
    }

function User(obj, args, context, info)
    {   
        
        return UserModel.findOne({ name : obj.name })
    }


function AddUser(obj, args, context, info)
    {   
        const User = new UserModel({
            name : String,
            Author : String, 
            title : String,
            description : String, 
            url : String,
        })
        // Data like Object, Array, String, Number, Boolean
        // or
        // Promise
        return User.save();
        // return axios("http://")
    }

module.exports = { Users, User, AddUser };