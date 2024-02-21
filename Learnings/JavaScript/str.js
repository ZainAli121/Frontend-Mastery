let str = "My name is Zain";
console.log(str);
console.log(str.length); // used for length of string
console.log(str[6]); // used for index of string
console.log(str.indexOf("name")); // used for index of word
console.log(str.slice(0, 7)); // used for slicing the string

let name = document.getElementById("name");

name.innerText = str;
name.display = "flex";
name.style.fontSize = "12vmax";
name.style.backgroundColor = "grey";
name.style.color = "white";
