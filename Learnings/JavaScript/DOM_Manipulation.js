// get element by id
console.log(document.getElementById("2"));

// get element by class
console.log(document.getElementsByClassName("h"));
const thisOne = document.getElementsByClassName("h");
console.log(thisOne[0]);

// get element by Name
const name = document.getElementsByName("email");
console.log(name[0]);

// get element by tag name
const sp = document.getElementsByTagName("span");
sp[0].style.backgroundColor = "green";
console.log(sp[0]);

const btn = document.getElementById("btn");
console.log(btn);
btn.style.backgroundColor = "aqua";
btn.style.padding = "0.7vmax";
btn.style.border = "none";
btn.style.borderRadius = "1vmax";
btn.style.cursor = "pointer";


