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

        const edit_btn = document.createElement("button");
        edit_btn.setAttribute("id", "edit");
        edit_btn.innerText = "Edit";

        edit_btn.addEventListener("click", ()=>{
            editTask(index, p, span, edit_btn,btn,div);
        });
        div.append(edit_btn);

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

function editTask(index, p, span, edit_btn, del_btn, div) {
    p.setAttribute("contenteditable", "true");
    span.setAttribute("contenteditable", "true");
    p.style.outline = "none";
    p.style.border = "2px solid white";
    span.style.outline = "none";
    span.style.border = "2px solid white"
    edit_btn.style.display = "none";
    del_btn.style.display = "none";

    const save_btn = document.createElement("button");
    save_btn.setAttribute("id", "save_btn");
    save_btn.innerText = "Save";

    save_btn.addEventListener("click", () => {
        saveTask(index, p.innerText, span.innerText);
        save_btn.remove(); 
        p.style.padding = "none";
        p.style.outline = "none";
        p.style.border = "none";
        span.style.padding = "none";
        span.style.outline = "none";
        span.style.border = "none";
        edit_btn.style.display = "block";
        del_btn.style.display = "block";
    });
    div.append(save_btn);
}

function saveTask(index, newTitle, newDesc) {
    tasks_list[index].title = newTitle;
    tasks_list[index].desc = newDesc;
    localStorage.setItem("tasks", JSON.stringify(tasks_list));
}

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