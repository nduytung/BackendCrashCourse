const express = require("express");
const app = express();

//cho view engine (o day la ejs) biet thu muc chua cac views
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "This is Duy Tung" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//day duoc goi la 1 middleware
//use la 1 middleware, nhung get khong phai, vi use LUON LUON chay moi khi co request
app.use((req, res) => {
  res.render("404");
});

//ta cung cos the su dung app.use de log ra cac thu, lam thanh 1 middleware neu ta muon
