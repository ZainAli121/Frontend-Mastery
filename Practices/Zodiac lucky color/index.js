const zodiac = document.getElementById("zodiac");

const changeBackgroundColor = () =>{
const body = document.body;
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "green";
            break;
        case "taurus":
            body.style.backgroundColor = "crimson";
            break;
        case "gemini":
            body.style.backgroundColor = "yellow";
            break;
        case "cancer":
            body.style.backgroundColor = "aqua";
            break;
        case "leo":
            body.style.backgroundColor = "chocolate";
            break;
        case "virgo":
            body.style.backgroundColor = "wheat";
            break;
        case "libra":
            body.style.backgroundColor = "tomato";
            break;
        case "scorpio":
            body.style.backgroundColor = "violet";
            break;
        case "sagittarius":
            body.style.backgroundColor = "teal";
            break;
        case "capricorn":
            body.style.backgroundColor = "tan";
            break;
        case "aquarius":
            body.style.backgroundColor = "silver";
            break;
        case "pisces":
            body.style.backgroundColor = "snow";
            break;
    
        default:
            break;
    }
};