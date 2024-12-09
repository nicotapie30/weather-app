export const Dates = () => {
	return (
		<section className='w-full h-auto p-4 shadow-xl bg-white/20 rounded-md flex flex-col gap-3'>
			<article className='mb-4 flex gap-4 place-items-end'>
				<h2 className='text-2xl pl-1'>Santa Rosa</h2>
				<p className='pr-1 text-md font-medium'>20:24</p>
			</article>
			<div>
				<article className='w-auto flex gap-10 place-items-center'>
					<div className='mb-4 flex place-items-center gap-2'>
						<img src='src/assets/imgs/sun.svg' alt='Sun' />
						<p className='text-3xl font-bold'>27º</p>
					</div>
					<div className='font-medium'>
						<p>Soleado</p>
						<p>Sensacion térmica 25º</p>
					</div>
				</article>
				<span className='text-slate-200'>
					Día soleado con temperatura máxima de 28º
				</span>
			</div>
			<div>
				<article className='p-4 text-sm flex flex-row justify-between'>
					<div>
						<p>Viento</p>
						<p className='text-lg font-medium'>10 km</p>
					</div>
					<div>
						<p>Humedad</p>
						<p className='text-lg font-medium'>20%</p>
					</div>
					<div>
						<p>Visibilidad</p>
						<p className='text-lg font-medium'>30 km</p>
					</div>
					<div>
						<p>Presión</p>
						<p className='text-lg font-medium'>1017 mbar</p>
					</div>
				</article>
			</div>
		</section>
	);
};
