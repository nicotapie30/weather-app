import { useState } from 'react';
import { capitaliceFirstName } from '../../utils/capitaliceFirstLetter';

export const Form = ({ onSearch, onCitySearch }) => {
	const [search, setSearch] = useState('');

	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSearch(search);
		onCitySearch(search);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex place-content-center mt-3 mb-8'
			>
				<input
					type='search'
					name='search'
					className='w-60 p-2 text-gray-900 backdrop-blur-lg bg-white/70 placeholder-gray-700 rounded-s-md outline-none border-none font-medium'
					placeholder='New York, Estados Unidos...'
					value={capitaliceFirstName(search)}
					onChange={(ev) => setSearch(ev.target.value)}
				/>
				<button className='px-2 w-auto h-full bg-teal-950 text-zinc-50 font-semibold rounded-e-md border-none outline-none hover:bg-slate-400 hover:text-gray-900 transition-all'>
					Buscar
				</button>
			</form>
		</>
	);
};
