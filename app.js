require('dotenv').config();
const express = require("express");
const app = express();
const product_routes = require("./routes/products.js");
const connectDB = require("./db/connect.js");

const PORT = process.env.PORT || 5000;

app.use("/api/products", product_routes);

app.get("/", (req, res) => {
  res.send("hello ");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); 
    app.listen(PORT,() => {
      console.log(`i am runing on ${PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();
