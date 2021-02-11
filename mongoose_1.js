const mongoose=require("mongoose");

//connection with mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/new_database',{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify: false}).
    then(()=>console.log("Connectedd")).catch(()=>{console.log("Error")});

const schema1=new mongoose.Schema({
    name:{type:String, require:[true,"Name field must be required"] },
    course:String,
    date:{type:Date, default:Date.now},
    reg:Boolean,
    duration:Number
});

const db=new mongoose.model("new_collection",schema1);
const db1=new db({
    name:"Hotesh",
    course:"kj&^*3h3kj",
    reg:true,
    duration:45
})

const db2=new db({
    name:"YOgesh",
    course:"bhakk",
    reg:false,
    duration:455
})

//db1.save().then(()=>console.log("saved")).catch(()=>console.log("error_unsaved"));
db.insertMany([db1,db2])
db.findByIdAndUpdate("6021134b87200b07a8535d86",{name:"Yogesh"}).then((doc)=>console.log(doc)).catch((err)=>console.log(err));
//db.findByIdAndDelete("6021134b87200b07a8535d86");

console.log("end")

// Data types in mongoose
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map
// Schema