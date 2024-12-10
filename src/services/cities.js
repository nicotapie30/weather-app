export const getCities = async (search) => {
	try {
		const response = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=03805d208b5c66bf962734ff65caf628`
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
		alert(`Ocurrió un error en la petición ${error}`);
	}
};
