import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({

    "firstname": {type:String},
    "lastname" : {type:String},
    "username":{type:String, required:true, unique:true},
    "password":{type:String, required: true},
    "DOB": {type:Date},
    "IsAdmin" :{type:Boolean, default:false},
    "role":{
        type:String,
        default: "user",
        enum:["admin","user"]
    },
    "createdAt" :{type:Date, default:Date.now()}

})

export default UsersSchema;
