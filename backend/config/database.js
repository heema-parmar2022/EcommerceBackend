const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/testecommerce";
const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/testecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server 4000: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
