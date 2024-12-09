export default function App() {
	return (
		<main className='w-full h-screen bg-gradient-to-b from-cyan-900 to-gray-200 flex flex-col place-items-center'>
			<h1 className='mt-10 text-3xl font-bold text-slate-50'>
				Aplicacion clima
			</h1>
			<div className='w-4/5 h-auto mt-4 p-4 bg-black/20 backdrop-blur-3xl text-zinc-50 shadow-md flex flex-col place-items-center gap-4 rounded-md'>
				<header className='place-content-center'>
					<input
						type='search'
						className='p-2 text-gray-900 backdrop-blur-lg bg-white/50 placeholder-gray-700 rounded-s-md outline-none border-none font-medium'
						placeholder='Buenos Aires...'
					/>
					<button className='px-2 w-auto h-full bg-teal-950 text-zinc-50 font-semibold rounded-e-md border-none outline-none hover:bg-slate-400 hover:text-gray-900 transition-all'>
						Buscar
					</button>
				</header>
				<section className='w-full h-full mt-4 flex flex-col'>
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
					<section className='w-full h-72 mt-8 p-4 shadow-xl bg-white/20 rounded-md'>
						<img
							src='src/assets/imgs/map.jpg'
							alt='mapa'
							className='rounded-md w-full h-full'
						/>
					</section>
				</section>
			</div>
		</main>
	);
}
