const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = ()=>{
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("DB is connected successfully");
}).catch((error)=>{
    console.log("issue in db connection");
    console.log(error)
});
}
module.exports=dbconnect;
