import { getWeatherCity } from '../../services/weather';
import { getCities } from '../../services/cities';
import { capitalizeFirstName } from '../../utils/capitalizeFirstLetter';
import { useState } from 'react';
import { Form } from './Form';

export const Dates = () => {
	const [weatherData, setWeatherData] = useState({});
	const [cityData, setCityData] = useState('');

	const handleWeatherSearch = async (search) => {
		const cities = await getCities(search);
		if (cities && cities.length > 0) {
			const { lat, lon } = cities[0];
			const weather = await getWeatherCity(lat, lon);
			setWeatherData(weather);
		}
	};

	const handleCitySearch = async (search) => {
		const nameCity = await getCities(search);
		if (nameCity && nameCity.length > 0) {
			const name = nameCity[0].name;
			setCityData(name);
			console.log(setCityData(search));
		}
	};

	const iconUrl = weatherData.icon
		? `http://openweathermap.org/img/wn/${weatherData.icon}.png`
		: '';

	return (
		<section className='w-full h-auto p-4 pt-2 shadow-xl bg-white/20 rounded-md flex flex-col gap-3'>
			<Form onSearch={handleWeatherSearch} onCitySearch={handleCitySearch} />
			<article className='mb-3 h-8 flex gap-4 place-items-end'>
				<h2 className='text-3xl font-medium pl-1'>{cityData}</h2>
			</article>
			<div>
				<article className='w-auto flex gap-10 place-items-center'>
					<div className='mb-4 flex place-items-center gap-2'>
						<img src={iconUrl} alt='Icono del clima' />
						<p className='text-3xl font-bold'>{weatherData?.weather}º</p>
					</div>
					<div className='font-medium'>
						<p>{capitalizeFirstName(weatherData.description)}</p>
						<p>Sensacion térmica de {weatherData?.feelslike}º</p>
					</div>
				</article>
				<span className='text-slate-200'>
					{capitalizeFirstName(weatherData?.description)} con temperatura mínima
					de {weatherData?.min} y máxima de {weatherData?.max}º
				</span>
			</div>
			<div>
				<article className='p-4 text-sm flex flex-row justify-between'>
					<div>
						<p>Viento</p>
						<p className='text-lg font-medium'>{weatherData?.wind} km</p>
					</div>
					<div>
						<p>Humedad</p>
						<p className='text-lg font-medium'>{weatherData?.humidity} %</p>
					</div>
					<div>
						<p>Visibilidad</p>
						<p className='text-lg font-medium'>{weatherData?.visibility} km</p>
					</div>
					<div>
						<p>Presión</p>
						<p className='text-lg font-medium'>{weatherData?.pressure} mbar</p>
					</div>
				</article>
			</div>
		</section>
	);
};
