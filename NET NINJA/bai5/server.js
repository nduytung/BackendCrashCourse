//CAI NODEMON TRUOC
//nodemon dung de debug de hon, ko can phai reload thu cong
//bay gio ko con la node server nua, ma la nodemon server

//sau do la npm init de tao package.json
//file nay se track tat ca nhung package chung ta su dung LOCALLY cho project nay

//sau do nua la cai lodash

const http = require("http");
const fs = require("fs");
//import lodash vao
const _ = require("lodash");
//lodash cung cap nhieu methd cho nhieu muc dich su dung khac nhau

const server = http.createServer((req, res) => {
  //dung thu lodash
  const greet = _.once(() => {
    console.log("Hello, thanks to lodash, this will only run once ");
  });

  greet();
  greet(); //lan nay se ko chay

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";

  switch (req.url) {
    default: {
      res.statusCode = 301; //moved away
      //nhung truong hop ko ton tai, ta redirect no ve home
      res.setHeader("Location", "/"); //redirect ve location la home
      break;
    }

    case "/": {
      path += "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      res.statusCode = 200;
      path += "about.html";
      break;
    }
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("There was an error");
      res.end();
    } else {
      res.write(data);
      res.end;
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("LISTENING ON PORT 3000");
});
