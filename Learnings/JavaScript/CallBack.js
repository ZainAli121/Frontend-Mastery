function sum(a, b, c){
    const result = a+b;
    c(result);
};

function display(result){
    h1 = document.querySelector("h1");
    h1.innerText = result;
}

sum(20, 40, display);