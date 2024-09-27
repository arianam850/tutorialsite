// JavaScript Document
async function start() {
	const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
	const weatherDate = await weatherPromise.json()
	const ourtemperture = weatherDate(weatherData.properties.periods[0].temperature)
	document.querySelector("#temperature-output").textContent = ourtemperture
}


start()