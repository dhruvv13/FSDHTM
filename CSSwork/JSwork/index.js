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
const output = document.getElementById('output');
const select = document.getElementById('select')
console.dir(select.value);

function selectlanguage(language){
    console.log(language)
    output.innerHTML="<h2>welcome to homepage</h2>"
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
button.addEventListener("click",()=>{
    // select.value
    const comp = selectlanguage(select.value);
    console.log(comp);
     output.innerHTML=`<h2 style = color:red>${comp}</h2>`;
});
//console.log(selectlanguage("c"));