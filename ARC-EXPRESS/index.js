const express = require("express");
const products = require("./routes/products");
const users = require("./routes/users");
const app = express();

//import caca module chua cac api rieng biet cho tung phan
//vd:
app.use("/products", products);
app.use("/users", users);

//wildcard route, dat o cuoi cung
app.get("*", (req, res) => {
  res.send("This site is currently not available");
});
app.listen(3000);

//MIDDLEWARE: XU LY TRUOC KHI GOI HANDLER
//UI -> REQUEST -> API -> MIDDLEWARE -> HANDLER
//su dung middleware de security check, parse body, kiem tra thong tin gui len co dung hay ko
//middleware chi don gian la method hay function ma thoi
//thu tu trong middleware rat quan trong
