const http=require("http");
const url=require("url");

const myServer=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico") return
    const myUrl=url.parse(req.url,true)
    console.log(myUrl);
    res.end("Hello World")
})

myServer.listen((3000),()=>{
    console.timeLog("Server created successfully!")
});