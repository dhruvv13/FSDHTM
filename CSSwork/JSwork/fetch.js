function getdata(){
    const output=document.getElementById('output');
    const data=fetch("https://dummyjson.com/recipes");
        data.then(
            (res)=>{
            console.log(res);
            res.json().then(
                (response)=>{
                    console.log(response.recipes[0]);
                    const str=response.recipes[0].id+ " "+ response.recipes[0].name+ " "+ response.recipes[0].instructions;
                    
                    output.innerHTML=`${str}`;
                }
            )
            }
        )}