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
const months =["Jan" , "Feb" , "March" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
const year =new Date();

// getting all shit combine wednesday 14 july 2021 
document.getElementById("daydate").innerHTML = days[weekday.getDay()] + " " + date.getDate() + "-" + months[month.getMonth()] + "-" + year.getFullYear();




