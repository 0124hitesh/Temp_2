const mongoose=require("mongoose");

//connection with mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/',useNewURLParser:true).
    then(()=>console.log("Connected")).catch(()=>{console.log("Error")})