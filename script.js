const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c74574b49amsh4d2d304e7c05dccp168cb3jsn7d6c4f18a77f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			//sunset.innerHTML=response.sunset


		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

const getWeather2 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			
			tempm.innerHTML = response.temp
			feels_likem.innerHTML = response.feels_like
			humiditym.innerHTML = response.humidity

		})
		.catch(err => console.error(err));
}

getWeather2("Mumbai")

const getWeather3 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			
			tempb.innerHTML = response.temp
			feels_likeb.innerHTML = response.feels_like
			humidityb.innerHTML = response.humidity

		})
		.catch(err => console.error(err));
}

getWeather3("Boston")


const getWeather4 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			
			templ.innerHTML = response.temp
			feels_likel.innerHTML = response.feels_like
			humidityl.innerHTML = response.humidity

		})
		.catch(err => console.error(err));
}

getWeather4("Lucknow")

const getWeather5 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			tempk.innerHTML = response.temp
			feels_likek.innerHTML = response.feels_like
			humidityk.innerHTML = response.humidity
			


		})
		.catch(err => console.error(err));
}
getWeather5("Kolkata")