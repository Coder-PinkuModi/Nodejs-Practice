// there is a basic way we can make routes of a webpage through simple http module by switch case:
const http= require("http")
const url=require("url")

const server=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico") return
    // then we can take url path through res.url
    console.log(req.url)
   const pathURL= url.parse(req.url) // now by console.log we get to know that path of the module holds the path of the website so if we can use it to in switch case for making routes of the webpage
    const urlParsing=url.parse(req.url,true)
    console.log(urlParsing)
    switch(pathURL.pathname){
        case "/":
            res.end("Hi i am Home page")
            break;
        
        case "/about":
            res.end("You opened about page")
            break;
        
        case "/name":
            console.log(urlParsing)
            if(urlParsing.query)
                res.end(`Hi ${urlParsing.query.name} u opened name page`)
           else
            res.end("This is name page of the website, called without any name as query")
            break;

            default:
                res.end("404 Not Found");
                break;
    }

    
})

server.listen(5000,()=>{
    console.log("server run successfully")
})

//it looks tough when doing http module, so same work we can do with express framework easily ans with clean code