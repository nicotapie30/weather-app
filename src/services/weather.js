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
		return `<div class='text-red-600 text-center mt-3 mb-8 font-semibold text-lg animate-pulse bg-red-200 rounded-md p-3 w-4/5 mx-auto backdrop-blur-lg bg-opacity-70 border border-red-400 border-opacity-50 shadow-lg transition-all'>
					<p>Ups... Algo salio mal! Intentelo mas tarde</p>
				</div>`;
	}
};
