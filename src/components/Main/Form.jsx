export const Form = () => {
	return (
		<form className='place-content-center'>
			<input
				type='search'
				className='p-2 text-gray-900 backdrop-blur-lg bg-white/50 placeholder-gray-700 rounded-s-md outline-none border-none font-medium'
				placeholder='Buenos Aires...'
			/>
			<button className='px-2 w-auto h-full bg-teal-950 text-zinc-50 font-semibold rounded-e-md border-none outline-none hover:bg-slate-400 hover:text-gray-900 transition-all'>
				Buscar
			</button>
		</form>
	);
};
