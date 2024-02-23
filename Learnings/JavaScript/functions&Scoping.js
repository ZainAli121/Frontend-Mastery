// function with no parameters
function print(){
    console.log("Hello World!");
}

print();
print();

// function with parameters
function add(a, b){
    let ans = a + b;
    console.log(ans);
    return ans;
}
add(5, 10);

function addArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let arr = [1, 2, 3, 4];
let ans = addArr(arr)
console.log(`The array sum is: ${ans}`)

// -------------------------------------Scoping---------------------------

let a = 30;
console.log("Value of a is: "+a);

// block
{
let a = 40;
console.log("Value of a is: "+a);  // output: 40
}

console.log("Value of a is: "+a); // output: 30

//see,the value of 'a' which is initalized inside block is only aceesible to that block i.e it is local variable of block

// but if we initialize the 'a' with 'var' type, then it will also have the scope out of block i.e global variable


// block
{
 var b = 60;
 console.log("Value of b is: "+b);
}

console.log("Value of b is: "+b);

// in short, scoping is all about global and local variables, we can access global variables inside the block but we cannot access local variables outside the block