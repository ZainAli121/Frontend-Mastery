const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const btn = document.getElementById("mybtn");

btn.addEventListener("click", () =>{
    // heading.style.backgroundColor = "chocolate";
    box1.classList.add("boxClass");
})

addEventListener("contextmenu", (e)=>{
e.preventDefault();
})