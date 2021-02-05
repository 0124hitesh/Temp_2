const mongoose=require("mongoose");

//connection with mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify: false}).
    then(()=>console.log("Connectedd")).catch(()=>{console.log("Error")});

const schema1=new mongoose.Schema({
    name:{type:String, require:true},
    course:String,
    date:{type:Date, default:Date.now},
    reg:Boolean,
    duration:Number
});

const db=new mongoose.model("new_db",schema1);
const db1=new db({
    name:"Hotesh",
    course:"kj&^*3h3kj",
    reg:true,
    duration:45
})
db1.save().then(()=>console.log("saved")).catch(()=>console.log("error_unsaved"));

console.log("end")