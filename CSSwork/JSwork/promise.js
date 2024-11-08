const mypromise = new Promise(
(resolve,reject)=>{
    let a=15;
    if (a>10){
        resolve({name :"Rahul", branch: "IT"});
    }
    else{
        reject("data is rejected ");
    }
}

);
mypromise.then(msg=>console.log(msg))
.catch(error=>console.log(error))
.finally(()=>console.log("finally executed"));