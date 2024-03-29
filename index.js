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
   
   const API_KEY ='daf5f6efa6d6bfd73aa0fdec1261ee00';
   
   var button = document.querySelector(".button");
   var countrystate = document.querySelector(".countrystate");
   
   var searchbox = document.querySelector(".location input");
   var searchbtn = document.querySelector(".location button");
   var weatherIcon = document.querySelector(".icon img");
//    let city = "hyderabad";
   
   async function api(city)
   {
      
       const res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`+city+`&appid=${API_KEY}`);
   
       var data = await res.json();
   
       console.log(data); 
       if(data.message=="city not found")
       {
          alert("enter valid city name");
       }   
   
       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".temp").innerHTML=data.main.temp + "°C";
       document.querySelector(".tempmax").innerHTML=Math.round(data.main.temp_max) + "°C";
       document.querySelector(".tempmin").innerHTML=Math.round(data.main.temp_min) + "°C";
       document.querySelector(".humidty").innerHTML=data.main.humidity + "%";
       document.querySelector(".windspeed").innerHTML=data.wind.speed + "km/hr";
   
       if(data.weather[0].main=="Clouds"){
           weatherIcon.src = "clouds.png";
       }
       else if(data.weather[0].main=="Clear"){
           weatherIcon.src = "clear.png";
       }
       else if(data.weather[0].main=="Rain"){
           weatherIcon.src = "rain.png";
       }
       else if(data.weather[0].main=="Drizzle"){
           weatherIcon.src = "drizzle.png";
       }
       else if(data.weather[0].main=="Mist"){
           weatherIcon.src = "mist.png";
       }
       else if(data.weather[0].main=="Humidity"){
        weatherIcon.src = "humidity.png";
        }
        else if(data.weather[0].main=="Wind"){
            weatherIcon.src = "wind.png";
        }
   }
   
   searchbtn.addEventListener("click",()=>{
       api(searchbox.value);
   })
   api();
   
   // .catch(error => console.error(error));
