const fs = require("fs");

//ghi file
const write = (data) => {
  fs.writeFile("./docs/writeNoteSecond.txt", data, (err) => {
    if (err) {
      console.log("There is an error");
      return;
    }

    console.log("file written");
  });
};

//doc file
const readFile = () => {
  const filePath = "./docs/note1.txt";
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log("There was an error: Detail: " + err);
      }
      write(data.toString());
    });
  } else {
    console.log("File not found !");
  }
};

readFile();

//ghi file nhung size lon

const writeStream = (data) => {
  fs.createWriteStream("./docs/writeNoteSecond.txt", data, (err) => {
    if (err) {
      console.log("try again, something happened");
      return;
    }
    console.log("write done ");
  });
};

//doc file nhung size lon

const stream = fs.createReadStream("./docs/writeNote.txt", {
  encoding: "utf8",
});
stream.on("data", (chunk) => {
  console.log("-------------- CHUNK RECEIVED ------------------");
  console.log(chunk);
});
