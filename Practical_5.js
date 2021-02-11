const mongoose=require("mongoose");

// Activity - 1 
mongoose.connect('mongodb://127.0.0.1:27017/Bloggers',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}).
then(()=>console.log("connected")).catch(()=>console.log("error"));

const schema=new mongoose.Schema({
    //Activity - 5
    Author:{type:String, required:[true,"Must be required"]},
    BlogCategory:String,
    num_Blogs:Number,
    Publish_Date:{type:Date,default:Date.now},
    Published:Boolean
})

// Activity - 2
const col=new mongoose.model("Post",schema);
const p1=new col({
    Author:"Hitesh",
    BlogCategory:"X",
    num_Blogs:10,
    Publish_Date:Date.now(),
    Published:true
})
const p2=new col({
    Author:"Sagar",
    BlogCategory:"Y",
    num_Blogs:15,
    Publish_Date:Date.now(),
    Published:false
})


// Activity - 3
col.insertMany([p1,p2]);
col.find({}).then((d)=>console.log(d)).catch((e)=>console.log(e));

// Activity - 4
col.find({Author:"Hitesh"}).then((d)=>console.log(d));
col.remove({Author:"Sagar"}).then((d)=>console.log(d));
col.update({Author:"Hitesh"},{$set:{Author:"Hitesh Sharma"}}).then((d)=>console.log(d));