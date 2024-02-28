// arrow function

const myFun = (a, b) => {
    console.log(a + b);
}
myFun(1, 5);

// arry methods
const arr = [2, 4, 6, 8];
const myFind = (value, index) => {
    if(value == 8){
        console.log("Value found in arr");
    }
    else{
        console.log("Not found!");
    }
}
arr.find(myFind);

// filter method
const filter = arr.filter((value, index) =>{
    if(value > 2){
        return value;
    }
});
console.log(filter);

// every method to check all elements
const check1 = arr.every((value, index) => {
    return value <=6;
})
console.log(check1);

// some method to check some elements
const check2 = arr.some((value, index) => {
    return value <=6;
})
console.log(check2);

// loop (for of loop)
for(const value of arr){
    console.log(value); 
}

// for each loop
arr.forEach((value, index) => {
    console.log(value)
});

// reduce method
let reduce_res = arr.reduce((prev_val, current_val, index) =>{
    return prev_val + current_val;
});
console.log(reduce_res);