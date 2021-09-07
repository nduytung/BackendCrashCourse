//day chinh la cach import cua JS thong thuong
//import la cach cua ES6
const person = require("./person");

//PATH
const path = require("path");
console.log(path.basename(__filename)); //in ra ten file nay
//co the dung path.dirname de lay ten folder
console.log(path.parse(__filename)); //in ra thong tin cua file nay
//dung de tao ra folder moi
console.log(path.join(__dirname, "/method"));

//FILESTREAM
const fs = require("fs");

//tao thu muc
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
// });

//viet vao file
//luu y: no overwrite chu khong viet tiep
//tat ca nhung method nay cua fs deu laf ASYNC
fs.writeFile("./test/hello.js", "Hello, this is duy tung", (err) => {
  if (err) {
    throw err;
    return;
  }
  console.log("written");
  return;
});

fs.readFile("./test/hello.js", (err, data) => {
  console.log(data.toString());
});

//OPERATING SYSTEM
const os = require("os");

console.log(os.platform());
console.log(os.arch()); //kien truc CPU
console.log(os.cpus());

//URL
const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100");

console.log(myUrl.href);
console.log(myUrl.toString());

//HTTP SERVER
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello there");
  res.end();
});

server.listen(3000, () => console.log("LISTENING ON PORT 3000"));
