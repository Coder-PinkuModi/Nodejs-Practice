// In this we will get to know we can export functions from different file, in the same directory
// Remember to use functions of different module or file first we have to make that file exportable by using export function inside it and also we have to use require function in the file to be imported...

// to import the function or the file or the whole module we have to use require function provided  by the nodejs

// Syntax: const variableName,{SpecificPropertyIfAny} = require("./moduleOrFile"); -->this syntax is been used till now though it is the syntax of old js bubt in modern js that is ecmascript6 we use import function rather than require

//Syntax: import variableName,{specificPropertyIfAny} from "./moduleOrFile";

// here we are going to write both 


//Remember: to import things first we have to make things importable it's tutorial is in the file to be imported that is math.js

// const math = require("./math.js") old method

import * as math from "./math.js" // modern method, but for this we have to write type: module in package.json and now we have to add exports default before the function to be exported

console.log(math);
