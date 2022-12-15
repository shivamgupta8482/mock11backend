const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
    
    title:String,
    quantity:String,
    priority:String,
    bookmark: { type: String, default: 'false' },
    description:String,
    date:String

})

const BookmarkModel = mongoose.model("bookmark",bookmarkSchema);

module.exports={BookmarkModel};