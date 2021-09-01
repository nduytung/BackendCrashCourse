// const http = require("http");

// const server = http.createServer((req, res) => {
//   //TRA DATA VE CHO REQUEST

//   //set header truoc
//   res.setHeader("Content-Type", "text/html"); //text/plain neu chi la chu thong thuong

//   //gui kem du lieu minh muon
//   res.write("<h1> Hello, my name' Duy Tung, I received your request</h1>");

//   //end de no bat dau gui di
//   res.end();
// });

// server.listen(3000, "localhost", () => {
//   console.log("SERVER STARTED!");
// });

//----------------------------------------------------------------------------//
//GUI DATA VE CHO SERVER NHUNG LA 1 PAGE HTML

const http = require("http");
const fs = require("fs");

//nhan vao 2 tham so la req va res. tuy vao tung req.url, ta se tra ve ers khac nhau
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";

  //su dung url cua req de routing

  //NHO GAN STATUS CODE VAO
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
