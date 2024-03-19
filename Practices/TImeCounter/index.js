const daysElement = document.querySelector(".days");
const minutesElement = document.querySelector(".minutes");
const hourElement = document.querySelector(".hours");
const secondElement = document.querySelector(".seconds");
const timerElement = document.querySelector(".timer");
const h1 = document.querySelector("h1");


const second = 1000,
minute = 60 * second,
hour =   60 * minute,
day = 24 * hour;

const getTime = ()=>{
    let date_today = new Date(),
    
    dd = String(date_today.getDate()).padStart(2, "0"),
    mm = String(date_today.getMonth() + 1).padStart(2, "0"),
    yyyy = date_today.getFullYear();
    console.log(dd)

    date_today = `${mm}/${dd}/${yyyy}`;

    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    const enteredDay = prompt("Enter Day").padStart(2, "0");
    

    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    if(date_today > targetDate){
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy +1}`;
    }

   const intervalID = setInterval(()=>{
    const date_to_count = new Date(targetDate).getTime();
    const current_date = new Date().getTime();

    const difference_in_time = date_to_count - current_date;

    const day_left = Math.floor(difference_in_time / day);
    const hour_left = Math.floor((difference_in_time % day) / hour);
    const minute_left = Math.floor((difference_in_time % hour) / minute);
    const second_left = Math.floor((difference_in_time % minute) / second);

    daysElement.innerText = day_left;
    hourElement.innerText = hour_left;
    minutesElement.innerText = minute_left;
    secondElement.innerText = second_left;

    if (difference_in_time < 0) {
        timerElement.style.display = "none";
        h1.innerText = "Time's Up";
        clearInterval(intervalID);
    }
    }, 0);
}
getTime()