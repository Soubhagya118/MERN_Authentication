const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/auth');


const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            trim:true,
    
        },phone:{
            type:String,
             required:true,
             unique:true,
           
        }
    },{timestamps:true}
);


const User = mongoose.model("user", userSchema);

module.exports=User;