//day la file danh cho bai 6 - express
const express = require("express");

//express app
const app = express(); //app chinh la 1 constance cua express

//listen request
app.listen(3000); //ko can toi localhost

//app lang nghe su kien GET va san sang phan hoi
app.get("/", (req, res) => {
  res.send("<p> homepage </p>"); //su dung method nay thi ko can end, ko can set content type header
  //su dung .send, ta co the bo qua buoc set header va buoc end, ta cung cos the gui theo bat ky kieu du lieu nao ta muon
});

//tra ve 1 file html thay vi 1 dong html
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
  //tai sao phai co root va dirname?
  //sendfile yeu cau absolute path, khong phai relative path, nen ta can them vao root de specific cho no
});

//redirect trong express
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
