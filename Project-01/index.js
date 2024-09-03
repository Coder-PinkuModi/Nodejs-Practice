const express = require("express");
const app = express();
const mongoDBconnect=require("./connection.js")
const routerLink=require("./routes/route")
const port = 5000;

app.use(express.urlencoded({ extended: true }));

mongoDBconnect("mongodb://127.0.0.1:27017/project1")

app.use("/users",routerLink)


app.listen(port, () => console.log(`Server started successfully at localhost: ${port}`));
