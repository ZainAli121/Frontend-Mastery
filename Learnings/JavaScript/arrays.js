let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// Accessing array elements
console.log(arr[0]); // 1

let arr1 = ["Zain", "Ali"]

console.log(arr1);
console.log(arr1[0]); // Zain

let arr3 =  new Array(2);
arr3[0] = "Zain";
arr3[1] = 1;


// Array Methods

// push method used to add the element at the end of the array
arr3.push(2);
console.log(arr3);
arr3.push(3);
console.log(arr3);

// pop method used to remove the last element from the array
arr3.pop();
console.log(arr3);
arr3.pop();
console.log(arr3);

// unshift method used to add the element at the start of the array
arr3.unshift(0);
console.log(arr3);

// shift method used to remove the first element from the array
arr3.shift();
console.log(arr3);

// length property used to get the length of the array
console.log(arr3.length);

arr3.push(4);
arr3.push(5);
arr3.push(6);
arr3.push(7);
console.log(arr3);

// splice method used to remove the elements from the array
arr3.splice(2,2);
console.log(arr3);

// slice method used to get the elements from the array
newArr3 = arr3.slice(2, 4);
console.log(newArr3);

// add elements to the array through loop
let arr4 = [];
for(let i =0; i<2; i++){
    let num = prompt("Enter the number");
    arr4[i] = num;
}

console.log(arr4);



const myObj = {
    name: "Zain",
    age: 20,
    city: "M.B.Din",
    Department: "Computer Science"
}``

console.log(myObj);
console.log(myObj.name);