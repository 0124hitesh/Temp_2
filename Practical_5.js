const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Bloggers',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}).
then(()=>console.log("connected")).catch(()=>console.log("error"));

const schema=new mongoose.Schema({
    name: String,
    age:Number,
    date:{type:Date},
    register:Boolean
})
const col=new mongoose.model("Post",schema);
const p1=new col({
    name:"Hitesh",
    age:20,
    register:true
})
const p2=new col({
    name:"shubhag",
    age:21,
    register:false
})

//col.insertMany([p1,p2]);

//col.find().then((d)=>console.log(d)).catch((e)=>console.log(e));

col.find({name:"Hitesh"}).then((d)=>console.log(d)).catch((err)=>console.log(err));

// author:String
// BlogCatergory:String;
// num_blogs:Number
// publish date:date
// published:boolean