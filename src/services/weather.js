export const getWeatherCity = async (lat, lon) => {
	const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=03805d208b5c66bf962734ff65caf628&lang=sp&units=metric`;

	try {
		const response = await fetch(BASE_URL);

		if (response.ok) {
			const weatherCity = await response.json();
			return {
				weather: weatherCity.main.temp,
				description: weatherCity.weather[0].description,
				icon: weatherCity.weather[0].icon,
				min: weatherCity.main.temp_min,
				max: weatherCity.main.temp_max,
				feelslike: weatherCity.main.feels_like,
				pressure: weatherCity.main.pressure,
				humidity: weatherCity.main.humidity,
				visibility: weatherCity.visibility,
				wind: weatherCity.wind.speed,
			};
		}
	} catch (error) {
		console.error('Fallo en petición');
	}
};
