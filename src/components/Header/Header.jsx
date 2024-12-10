import { getTime } from '../../utils/time';

export const Header = () => {
	return (
		<header className='w-full p-4 flex place-items-center justify-between'>
			<img
				className='w-24 h-24 rounded-md'
				src='src/assets/imgs/Logo.webp'
				alt=''
			/>
			<p className='text-3xl text-zinc-100 font-medium'>
				{getTime().hoursMinutes.hour}:{getTime().hoursMinutes.minutes}
			</p>
		</header>
	);
};
