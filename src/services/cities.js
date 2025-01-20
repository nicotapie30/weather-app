const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;

export const getCities = async (search) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${API_KEY}`
		);
		if (response.ok) {
			const cities = await response.json();

			return cities?.map((city) => ({
				lat: city.lat,
				lon: city.lon,
				name: city.name,
			}));
		}
	} catch (error) {
		alert(`Error en la peticion: ${error}`)
	}
};
