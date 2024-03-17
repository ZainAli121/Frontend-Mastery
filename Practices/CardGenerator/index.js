const container = document.querySelector(".container");

function createCard(title, username, views, posted_on, thumbnail, timeDuration){

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const img_class = document.createElement("div");
    img_class.setAttribute("class", "img");
    card.append(img_class);

    const img = document.createElement("img");
    img.setAttribute("class", "img");
    img.src = thumbnail;
    img_class.append(img);

    const duration_div = document.createElement("div");
    duration_div.setAttribute("class", "duration");
    duration_div.innerText = timeDuration;
    img_class.append(duration_div);
    

    const div3 = document.createElement("div");
    div3.setAttribute("class", "text")
    card.append(div3);

    const h1 = document.createElement("h1");
    h1.innerText = title;
    div3.append(h1);

    let strViews;
    if(views >= 1000000){
        strViews = views/1000000 +"M"
    }else if(views < 1000000 && views>= 1000){
        strViews = views/1000 +"K"
    }else{
        strViews = views;
    }

    const p = document.createElement("p");
    p.innerText = `${username} . ${strViews} views . ${posted_on}`;
    div3.append(p);
    container.append(card);
}

createCard("Spinning around Nature | Natural Diversity Explorer Playlist - Tutorial #1", "NatureAround", 100, "5 months ago", "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg", "31:00");