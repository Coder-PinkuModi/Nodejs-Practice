//OLD WAY:

//  function add(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// we have created two mathematical functions

//Remember: If we don't make anything exportable then only it will pass it to the imprtable file otherwise a empty object will be recieved there

// There are two ways to export file that is by making functions in line as shown here and then export is by making the object and using export function

// as this is module so Syntax: module.exports=value or object whatever required
// OLD WAY
// 1ST WAY

// module.exports={ // this is the way u can export all the functions at once as object
//     "add":add,
//     "sub":sub,
// }


// The Other Way to Export the function is by simply making the functions and writting in that at end export, it will be arrow function for sure
// like:


// 2ND WAY
// exports.add=(a,b)=>a+b; // the other way, but in this the function name will be anonymous as the name we add after exports.(word)--> word is the property
// exports.sub=(a,b)=>a-b; // the other way, but in this the function name will be anonymous as the name we add after exports.(word)--> word is the property

// Remember: If we put module.exports first then it will export that is it overpowers exports.properties


// NEW WAY:

// export default function add(a,b){ //for just a function to export 
//     console.log(a+b);
// }


// math.js
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}


// math.js
// export const mathFunctions = { // as object to be exported
//     add(x, y) {
//       return x + y;
//     },
//     subtract(x, y) {
//       return x - y;
//     },
//     // Add more functions here
//   };

// to import function Syntax: import {mathFunctions} from "./math.js"; also can use destructuring
  

