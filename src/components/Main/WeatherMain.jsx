import { useState } from 'react';
import { Dates } from './Dates';
import { Map } from './Map';

export const WeatherMain = () => {
	const [location, setLocation] = useState(null);

	return (
		<>
			<main className='w-full h-screen lg:px-40 xl:px-80 flex flex-col place-items-center'>
				<h1 className='mb-6 text-5xl font-bold text-slate-50'>
					Consulte el clima
				</h1>
				<p className='mb-4 text-center text-lg text-stone-200 font-medium'>
					Cuanto mas detallado sea, mayor presición tendrá la respuesta
				</p>
				<div className='w-4/5 h-auto p-4 bg-white/20 backdrop-blur-3xl text-zinc-50 shadow-md flex flex-col place-items-center gap-4 rounded-md'>
					<section className='w-full h-full mt-4 flex flex-col'>
						<Dates setLocation={setLocation} />
						<Map location={location} setLocation={setLocation} />
					</section>
				</div>
			</main>
		</>
	);
};