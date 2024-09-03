const http = require("http");
const fs = require("fs");
const log = new Date();
let json = [];

const myServer = http.createServer((req, res) => {
  //   createServer will create server for us

  // u cannot create json file with objects in array type directly, u have to first parse it to javascipt object to a empty array and then push the latest data in it and then have again change it json object and then append it
  fs.readFile("./source.json", "utf-8", (err, data) => {
    if (err && err.code !== `ENOENT`) {
      console.log("Error reading file ", err);
      res.statusCode = 500;
      res.end("Server error, Json file does not exist !");
      return;
    }

    let jsonArr = [];
    if (data) {
      try {
        jsonArr = JSON.parse(data); // parsing the data file
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        res.statusCode = 500;
        res.end("File parsing problem");
        return;
      }
    }
    jsonArr.push(req.headers);

    let userAgent = jsonArr[jsonArr.length - 1]["user-agent"];

    fs.appendFile(
      "./log.txt",
      `new request recieved in ${log} with ${userAgent} in ${req.url}\n`,
      (err) => {
        //appending time log of request
        if (err) {
          console.error("Error writing to log file:", err);
        } else {
          console.log("Request logged successfully");
        }
      }
    );

    fs.writeFile("./source.json", JSON.stringify(jsonArr, null, 2), (err) => {
      if (err) {
        console.error("Error writing JSON to file:", writeErr);
        res.statusCode = 500;
        res.end("Server Error");
        return;
      }
    });

    console.log("Request headers appended successfully");
    res.end("Hello World");
  });
});

myServer.listen(5000, () => {
  console.log("Server running in port 5000");
});
