// through express we can perform server-side making and handling easily-- for this we have to import express and no need to import http and url for this--> express uses them in backend by tiself
import express from "express"
const app=express()

// Syntax for creating server: instanceapp.method(path,eventhandlers)
app.get("/",(req,res)=>{
    res.send("Hello World, this is Homepage")
})

app.get("/about",(req,res)=>{
    res.send("This is about page of the websites")
})

//now we can access the parameters like query too without adding url here and with easy way
app.get("/name",(req,res)=>{
// now accessing them
res.send(`Hi ${req.query.name}, Welcome to the Websites`)
})


app.listen(3000,()=>{
    console.log("Server started sucessfully")
})
