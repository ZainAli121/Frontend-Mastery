const title = document.getElementById("title");
const desc = document.getElementById("desc");
const form = document.querySelector("form");
const container = document.querySelector(".container");


const tasks_list = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : [];
get_all_tasks();


function get_all_tasks(){
    tasks_list.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.desc;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("id", "del");
        btn.innerText = "Delete";
        btn.addEventListener("click", ()=>{
            remove_task();
            tasks_list.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks_list));
            get_all_tasks();
        })
        div.append(btn);
        container.append(div);

    });
};


function remove_task(){
    tasks_list.forEach(()=>{
    const task = document.querySelector(".task");
    task.remove();
    });
};


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    remove_task();  
    tasks_list.push({
        title : title.value,
        desc : desc.value
    });
    localStorage.setItem("tasks", JSON.stringify(tasks_list))
get_all_tasks();
}); 