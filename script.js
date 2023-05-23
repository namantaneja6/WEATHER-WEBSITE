const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f559ff93emshb4c1cd68f2f5bb9p17eb4djsn44bdc67b35af',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

const getWeatherHyderabad = ()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempH.innerHTML = response.temp
		feels_likeH.innerHTML = response.feels_like
		humidityH.innerHTML = response.humidity
		min_tempH.innerHTML = response.min_temp
		max_tempH.innerHTML = response.max_temp
		wind_speedH.innerHTML = response.wind_speed
		wind_degreesH.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

getWeatherHyderabad()

const getWeatherJaipur = ()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempJ.innerHTML = response.temp
		feels_likeJ.innerHTML = response.feels_like
		humidityJ.innerHTML = response.humidity
		min_tempJ.innerHTML = response.min_temp
		max_tempJ.innerHTML = response.max_temp
		wind_speedJ.innerHTML = response.wind_speed
		wind_degreesJ.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

getWeatherJaipur()

const getWeatherLondon = ()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempL.innerHTML = response.temp
		feels_likeL.innerHTML = response.feels_like
		humidityL.innerHTML = response.humidity
		min_tempL.innerHTML = response.min_temp
		max_tempL.innerHTML = response.max_temp
		wind_speedL.innerHTML = response.wind_speed
		wind_degreesL.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

getWeatherLondon()