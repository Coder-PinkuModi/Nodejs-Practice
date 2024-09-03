// const { createServer } = require('node:http');// this is the way we use to import function from modules earlier
// but now we have better way in modern es6 by using import keyword rather than require, only we have to write "type":module, to use es6 standard inside package json
import http from "http"
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});