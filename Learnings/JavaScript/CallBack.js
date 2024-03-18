
const sum=(a,b,func)=>{
    const result = a+b;
    func(result);
}


function display(result){
    h1 = document.querySelector("h1");
    h1.innerText = result;
}

sum(20, 40, display);