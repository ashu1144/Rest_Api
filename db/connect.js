const mongoose = require('mongoose');

const connectDB =(url)=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log("done")
    })
    .catch((err)=>{
        console.error("mongodb connection error",err)
    })
}


module.exports=connectDB