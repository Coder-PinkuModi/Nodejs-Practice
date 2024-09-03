// Playing some functions in built-in module fs
import fs from "fs" //importing fs i.e. file system module in fs
import os from "os" //importing os module will help to fetch info or to manipulate more upon os level

console.log(os.cpus().length) // this will print the total cpu thread available in current os
// fs.writeFileSync("./world.txt","Hello World\n","utf-8") // this will make a file of name world.txt in the same directory and with code:UTF-8 which if we have not given in this caase then also it would have work

fs.writeFileSync("file.js",`console.log("Hello World")\n`) // will create file in the same directory

fs.appendFileSync("world.txt","Welcome Again\n")// this will append inner text written to world.txt in same directory

console.log(fs.readFileSync("./world.txt","utf-8")) // this will read file world.txt in same director

console.log(fs.openSync("world.txt"))

fs.unlinkSync("file.js") // this will delete file.js
