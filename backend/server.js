const app = require("./app");

const dotenv = require("dotenv");
//const connectDatabase = require("./config/database");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
//Handling uncaught Exception

process.on("uncaughtException",()=>{
  console.log('Error: ${err.message}');
  console.log('shutting down server due to uncaught Exception');
  process.exit(1);
});

mongoose.connect("mongodb://localhost:27017/testecommerce", { useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {
    console.log(`Mongodb connected with server 4000: ${data.connection.host}`);
  })
  .catch(err => console.log(err));

  const CLOUDINARY_NAME = "dlk8wc0is";
  const CLOUDINARY_API_KEY = "828835224739187";
  const CLOUDINARY_API_SECRET = "G3sfP1sUcjQbY_fS5kYeMkUmaHI";
  
  cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

const server = app.listen(4000, () => {
    console.log(`Server is working on http://localhost:4000`);
  });


  //Unhandeled Promise Rejection

  process.on("unhandledRejection",err=>{
  console.log('Error: ${err.message}');
  console.log('shutting down server due to unhandled promise rejection');

  server.close(() =>{
    process.exit(1);
  });
  });