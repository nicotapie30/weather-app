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
		return `<div class='text-red-600 text-center mt-3 mb-8 font-semibold text-lg animate-pulse bg-red-200 rounded-md p-3 w-4/5 mx-auto backdrop-blur-lg bg-opacity-70 border border-red-400 border-opacity-50 shadow-lg transition-all'>
					<p>Ups... Algo salio mal! Intentelo mas tarde</p>
				</div>`;
	}
};
