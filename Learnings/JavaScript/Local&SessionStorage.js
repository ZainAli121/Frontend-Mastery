const input = document.getElementById("input");
const btn = document.getElementById("btn");
const Delbtn = document.getElementById("Delbtn");

const clickBtn = () =>{
    // alert(input.value);
    sessionStorage.setItem("key1" ,input.value)

}
// btn.addEventListener("click", clickBtn);
// alert(sessionStorage.getItem("key1"))

// Delbtn.addEventListener("click", ()=>{
//     sessionStorage.removeItem("key1");
// })

btn.addEventListener("click", ()=>{
    localStorage.setItem("key2", input.value);
})

Delbtn.addEventListener("click", ()=>{
    localStorage.removeItem("key2");
})