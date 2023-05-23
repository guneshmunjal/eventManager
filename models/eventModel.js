const mongoose = require("mongoose");

const  eventSchema = new mongoose.Schema({
time:{
    type:Date,
    required:true,
},
place:{
    type:String,
    required:true,
},
venue:{
    type:String,
    required:true,
},
servicesWanted:{
    type:String,
    enum:["Flowers","Catering","Tents",]
},
atDate:{
    type:String,
    required:true
}
});


module.exports = mongoose.model("event",eventSchema);