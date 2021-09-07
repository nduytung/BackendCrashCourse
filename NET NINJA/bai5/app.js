const express = require("express");
const app = express();
//morgan dung de log info ra, ta do phai log thu cong
const morgan = require("morgan");
//cho view engine (o day la ejs) biet thu muc chua cac views
app.set("view engine", "ejs");

app.listen(3000);

//serve static files
//khong phai files nao cuxng chay duoc, voiw nhung file nhu css hay img, ta can phai dung static
app.use(express.static("public")); //tat ca nhung file trong public deuc co the duoc truy cap

//------------------------------------------------------

// app.use((req, res, next) => {
//   console.log("received new request from " + req.hostname);
//   next(); //neu khong co next, browser se bi hang vi ko biet di dau tiep
// });

//ko can su dung middleware o tren, vi dung morgan se tien hon
app.use(morgan("dev"));

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

try {
  // lam mot cai lon gi do o day 
  //vd thuc hien ham A
  .then(data => {
    //neu A thuc hien thanh cong, thi no nhay vao day 
  })
} catch (err) {
  //neu ma A thuc hien that bai, TAT CA nhay het vao day 
}