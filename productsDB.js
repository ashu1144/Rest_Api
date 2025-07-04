require("dotenv").config()
const Product = require('./model/Product.js')
const connectDB  = require("./db/connect.js")
const Productjson = require("./products.json")
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.create(Productjson)
        console.log("success")

    }
    catch(err){
        console.log(err);
        
    }
}



start()