import { getTime } from '../../utils/time';

export const Header = () => {
	return (
		<header className='w-full lg:px-40 xl:px-96 p-4 flex place-items-center justify-between'>
			<img
				className='w-24 h-24 rounded-md'
				src='src/assets/imgs/Logo.webp'
				alt='Wheater Now'
			/>
			<p className='text-3xl text-zinc-100 font-medium'>
				{getTime().hoursMinutes.hour}:{getTime().hoursMinutes.minutes}
			</p>
		</header>
	);
};
