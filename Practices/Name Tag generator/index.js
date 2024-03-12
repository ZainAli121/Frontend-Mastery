const name = document.getElementById("name");
const tagContainer = document.querySelector(".tags");
const getName = () =>{
    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");

    tag.innerText = `Hey, My name is ${name.value}`;

    tagContainer.append(tag)
};