const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
    title:String,
    quantity:String,
    priority:String,
    bookmark: { type: String, default: 'false' },
    description:String,
    date:String

})

const UserModel = mongoose.model("user",userSchema);

module.exports={UserModel};