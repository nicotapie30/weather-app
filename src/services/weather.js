const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;

export const getWeatherCity = async (lat, lon) => {
	const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=sp&units=metric`;

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
		alert(`Error en la petición: ${error}`);
	}
};
