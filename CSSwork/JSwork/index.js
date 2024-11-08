// console.log("hello world");

// var a =12;
// if(a>10){
//     b=20;
//     console.log("a inside:"+a);
// }
// console.log("a outside:"+b);
//console.log("hi, inside index.js");
//function fun(a,b){
  //  console.log("hiiii");
    //return a+b;
//}
//const result = fun(23,12);
//console.log(result);
const button = document.getElementById("btn");
console.dir(button);

function selectlanguage(language){
    console.log("Hi, Inside Language")
    let data;
    if(language=='c'){
function cCompiler()
{
    return "C compiler"
}
data=cCompiler()
    }
    if(language=='java'){  
function javacompiler()
{
    return "java compiler"
}
data = javacompiler()
    }
    return data;
}
console.log(selectlanguage("java"));