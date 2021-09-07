const express = require("express");
const products = require("./routes/products");
const users = require("./routes/users");
const app = express();

//import caca module chua cac api rieng biet cho tung phan
//vd:
app.use("/products", products);
app.use("/users", users);
app.listen(3000);
