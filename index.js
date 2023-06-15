let inputloacation = document.querySelector("input");
let button = document.querySelector("button");
let image = document.querySelector(".weatherimg").src;
let tempture = document.querySelector(".temp");
let skyinfo = document.querySelector(".skyinfo");
let locationName = document.querySelector(".locationName");
let wind = document.querySelector(".windspeed");
let humidity = document.querySelector(".humidity");
let airpressure = document.querySelector(".airpressure");
let visibility=document.querySelector(".visibility")
let feellike=document.querySelector(".Feels-like")
let min=document.querySelector(".min")
let max=document.querySelector(".max")
let index;


button.addEventListener("click", (button) => {
  let city = inputloacation.value;
  console.log(city);
button.preventDefault()

getDeta(city).then((value)=>{
    console.log(value)
    skyinfo.textContent=`${value.weather.description}`
    tempture.textContent=`${value.main.temp}°F`
    locationName.textContent=`${value.name}`
    skyinfo.textContent=`${value.weather[0].main}`
    wind.textContent=`${value.wind.speed} MPH`
    humidity.textContent=`${value.main.humidity}%`
  airpressure.textContent=`${value.main.pressure}`
  visibility.textContent=`${value.visibility}`
  feellike.textContent=`${value.main.feels_like}`
  min.textContent=`Min:${value.main.temp_min}°F`
  max.textContent=`Max:${value.main.temp_max}°F`

    }).catch((err)=>{
    console.log("no data avalaible")
    })

});

const  getDeta= async (inputloacation)=>{
console.log(inputloacation)
    const url= `https://open-weather13.p.rapidapi.com/city/${inputloacation}`;
const options = {
	method: 'GET',
  //enter your weather Rapid AIP key
	headers: {
		'X-RapidAPI-Key': 'enter your weather Rapid AIP key',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

let featch= await  fetch(url, options)
let responese=await featch.json()
index+=index;
console.log(index)
if(index==2){
  alert("bas kar bhai")
}
return responese;
}
