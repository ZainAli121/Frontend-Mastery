const url = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("img");

const fetchData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => (img.src = data.message))
    .catch(e=> console.log(e))
    .finally(() => console.log("Done Execution!"))
};

fetchData();