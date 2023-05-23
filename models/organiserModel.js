const mongoose = require("mongoose");


const organiser = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
   experience:{
       type:String,
       required:true,
    },
    servicesProvided:{
        type:[String],
        required:true,
        enum:["Flowers","Catering","Tents"]
    },  
    place:{
        type:String,
        required:false,
    },
    venue:{
        type:String,
        required:false,
    },
    servicesWanted:{
        type:String,
        required:false
    },
    atDate:{
        type:String,
        required:false,
    },
});


module.exports = mongoose.model("organiser",organiser);
