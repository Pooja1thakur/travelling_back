const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pooja:pooja2810rohit@cluster0.urus3bc.mongodb.net/blogapp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})