
  
var mongoose = require("mongoose");

var CampgroundSchema = new mongoose.Schema({ 
    name : String,
    price: String,
    image:String,
    description:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        username:String


    },
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:  "Comment"  
        }
    ]
});
/*
index
new 
create
*/
module.exports = mongoose.model("Campground",CampgroundSchema);