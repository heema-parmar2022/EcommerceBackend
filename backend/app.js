const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");



const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//Route Imports


const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const user = require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1", order);
app.use("/api/v1",user);
app.use("/api/v1", payment);
app.use(errorMiddleware);




//Middleware for Error

module.exports = app;
