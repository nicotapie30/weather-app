import React, { useState, useEffect } from 'react';
import { getTime } from '../../utils/time';

export const Header = () => {
	const [time, setTime] = useState(getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<header className='w-full lg:px-40 xl:px-96 p-4 flex place-items-center justify-between'>
			<img
				className='w-24 h-24 rounded-md'
				src='./Logo.webp'
				alt='Wheater Now'
			/>
			<p className='text-3xl  text-slate-800/90  font-bold'>
				{time.hoursMinutes.hour}:{time.hoursMinutes.minutes}
			</p>
		</header>
	);
};
