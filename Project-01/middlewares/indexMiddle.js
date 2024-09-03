const fs=require("fs")
async function resResTime(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`new request recieved in ${Date.now()} with ${req.ip} in ${req.method} ${req.path}\n`)
        next();
    }
}

module.exports=resResTime;