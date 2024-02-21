// let age = Number(prompt("Enter your age"));

// console.log(typeof age);

// -------------------if else condition -------------------
// if(age >= 18){
//     console.log("Your age is " + age +", You are eligible to vote");
// }
// else if(age < 18 && age > 0){
//     console.log("Your age is "+ age +", You are not eligible to vote");
// }

// else{
//     console.log("Invalid input");
// }

// ----------------- Switch case ---------------------
// switch(age){
//     case 18:
//         console.log("You are 18");
//         break;

//     case 20:
//         console.log("You are 20");
//         break;
    
//     default:
//         console.log("You are not 18 or 20");
//         break;
// }

// ------------------- Loops -------------------

// for loop
let sum  = 0;
for(let i = 0; i<5; i++){
    sum = sum+i;
}
console.log("Sum is "+sum);

// while loop
let sum1 = 0;
let j = 0;
while(j<5){
    sum1 = sum1 + j;
    j++;
}
console.log("Sum is "+sum1);