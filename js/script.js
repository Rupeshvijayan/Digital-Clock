let dateEle = document.querySelector(".date");
let monthEle = document.querySelector(".month");
let yearEle = document.querySelector(".year");
let hoursEle = document.querySelector(".hours");
let minutesEle = document.querySelector(".minutes");
let secondsEle = document.querySelector(".seconds");
let dayEle = document.querySelector(".day");

function numberConversion(newNumber){
    if (newNumber <= 9){
        newNumber = '0' + newNumber;
    }else{
        newNumber = '' + newNumber;
    }
    return (newNumber);
} 

function numberToDayConversion(dayNumber){
	let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return day[dayNumber];
}

function getTime(){

	let currentTime = new Date();

	//DATE
	let date = currentTime.getDate();
    date = numberConversion(date);

	//MONTH
	let month = currentTime.getMonth();	
    month++; //month += 1 or month = month + 1
     month = numberConversion(month);

	//YEAR
	let year = currentTime.getFullYear();

	//HOURS
	let hours = currentTime.getHours();
    hours = numberConversion(hours);

	//MINUTES
    let minutes = currentTime.getMinutes();
    minutes = numberConversion(minutes);

	//SECONDS
	let seconds = currentTime.getSeconds();
    seconds = numberConversion(seconds);

	//DAY
	let day = currentTime.getDay();
    day = numberToDayConversion(day);

    
    hoursEle.innerHTML = hours;
    minutesEle.innerHTML = minutes;
    secondsEle.innerHTML = seconds;
    dateEle.innerHTML = date;
    monthEle.innerHTML = month;
    yearEle.innerHTML = year;
    dayEle.innerHTML = day;
}

setInterval(getTime,1000);