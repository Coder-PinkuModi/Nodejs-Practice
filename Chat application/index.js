import express from "express"; 
import { createServer} from "node:http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import { Server } from 'socket.io';


const app= express();
const server=createServer(app);
const io = new Server(server);

// console.log("import.meta.url", import.meta.url)
// console.log("filaURLToPath", fileURLToPath(import.meta.url))
const __dirname= dirname(fileURLToPath(import.meta.url)); 
// console.log("__dirname", __dirname)

app.get("/",(req,res)=>{
    res.header("Content-Type","text/html").status(200);
    res.sendFile(join(__dirname,"index.html"));
})

io.on('connect', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });


server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});