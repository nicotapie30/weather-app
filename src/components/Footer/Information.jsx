export const Information = () => {
	return (
		<div className='lg:pl-40 xl:pl-60'>
			<h3 className='mb-3 text-xl font-bold'>Información</h3>
			<div className='flex flex-col gap-1 font-medium'>
				<a
					className='hover:underline'
					href='https://react-leaflet.js.org/'
					target='blank'
				>
					<p>React Leaflet</p>
				</a>
				<a
					className='hover:underline'
					href='https://openweathermap.org/'
					target='blank'
				>
					<p>Open Weather clima</p>
				</a>
				<a
					className='hover:underline'
					href='https://openweathermap.org/'
					target='blank'
				>
					<p>Open Weather ciudades</p>
				</a>
			</div>
		</div>
	);
};
