const url = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("img");

// const fetchData = () => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => (img.src = data.message))
//     .catch(e=> console.log(e))
//     .finally(() => console.log("Done Execution!"))
// };

// fetchData();


// ----------------------Async ----------------------->
// const fetchData = async()=>{
//     const response = await fetch(url);
//     const data = await response.json();
//     img.src = data.message;
// };

// fetchData();

const fetchData = async()=>{
try{
    const response = await fetch(url);
    const data = await response.json();
    img.src = data.message;
}catch(error){
    console.log(error.message);
}
finally{
    console.log("Done!")
}
}

fetchData();