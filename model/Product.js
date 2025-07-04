const exprees = require('express')
const mongoose =require('mongoose')


const ProductShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    company:{
        type:String,
        enum:{
            values:["samsung", "apple","dell","mi"],
            message:`{VALUE} is not supported`
        }
    }
    ,price:{
        type:Number ,
        required:true
    }
    ,
    createdAt:{
        type:Date,
        Default:Date.now()
    },



})


module.exports=mongoose.model("Product",ProductShema)