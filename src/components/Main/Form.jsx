import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const Form = ({ onSearch, onCitySearch }) => {
	const [search, setSearch] = useState('');
	const [inputError, setInputError] = useState(false);

	const handleSubmit = (ev) => {
		ev.preventDefault();
		validateInput();
		onSearch(search);
		onCitySearch(search);
	};

	const validateInput = () => {
		if (search.trim() === '') {
			setInputError('Por favor, ingrese una ubicación');
		}else {
			setInputError(false);
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-2 mt-3 mb-8'
			>
				<div className='flex items-center justify-center'>
					<input
						type='search'
						name='search'
						className='w-60 p-2 max-[500px]:w-4/5 text-gray-900 backdrop-blur-lg bg-white/70 placeholder-gray-700 rounded-s-md outline-none border-none font-medium'
						placeholder='New York, Estados Unidos...'
						value={capitalizeFirstLetter(search)}
						onChange={(ev) => setSearch(ev.target.value)}
					/>
					
					<button className='w-auto h-auto px-4 py-2  bg-blue-800/50 text-zinc-50 font-semibold rounded-e-md border-none outline-none hover:bg-zinc-50 hover:text-blue-800/80 transition-all'>
						Buscar
					</button>
				</div>
				<div className='flex items-center justify-center'>
					{inputError && <p className='w-full text-center text-base text-red-600 transition-all'>{inputError}</p>}				
				</div>
			</form>
		</>
	);
};
