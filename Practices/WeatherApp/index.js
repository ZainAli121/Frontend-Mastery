const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".SearchField");
const form = document.querySelector("form");

// event listener
form.addEventListener("submit", searchCity);

// default location
let targetCity = "Islamabad";

// function to fetch data from weather API
const fetchData = async (targetCity)=>{
   try {
    const url = `https://api.weatherapi.com/v1/current.json?key=c71e0ee1652a43178ec114403242003&q=${targetCity}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    // Destructuring
    const {
        current:{temp_c, condition:{icon, text}},
        location:{name, localtime}
    } = data

    updateDOM(temp_c, name, icon, text, localtime)
   } 
   catch (error) {
    alert("Location not found!")
    location.reload();
   }

}

// function to update DOM
function updateDOM(temperature, cityName, emoji, condition, date_time){
    temperatureField.innerText = temperature+"º";
    cityField.innerText = cityName;
    emojiField.src = emoji;
    weatherField.innerText = condition;

    const date = date_time.split(" ")[0];
    const time = date_time.split(" ")[1];
    const day = new Date(date).getDay();

    dateField.innerText = `${time} - ${get_day_string(day)} ${date}`;
}

fetchData(targetCity);


// function to get the city entered by user
function searchCity(e){
    e.preventDefault();
    targetCity = searchField.value;
    fetchData(targetCity);
};


// function to get name for the day
function get_day_string(num){
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";

        default:
            return " ";
    }
}