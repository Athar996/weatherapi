// getting time 
const hr =new Date();
const min =new Date();
document.getElementById("hour").innerHTML =hr.getHours();
document.getElementById("minute").innerHTML =min.getMinutes();

// declaring weekday
const weekday = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// declaring
const date =new Date();
const month = new Date();
const months =[" ", "Jan" , "Feb" , "March" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
const year =new Date();

// getting all combine wednesday 14 july 2021 
document.getElementById("daydate").innerHTML = days[weekday.getDay()] + " " + date.getDate() + "-" + months[month.getMonth()] + "-" + year.getFullYear();




//weather api

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

var button = document.querySelector('.button');
var countrystate = document.querySelector('.countrystate');
var temp = document.querySelector('.temp');
var pressure = document.querySelector('.pressure');
var windspeed = document.querySelector('.windspeed');

button.addEventListener('submit',function(){
   
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=`+countrystate.value+`&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
    
})