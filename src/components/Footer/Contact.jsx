export const Contact = () => {
	return (
		<div className='lg:pr-40 xl:pr-60'>
			<h3 className='mb-3 text-xl font-bold'>Contacto</h3>
			<ul className='flex gap-1'>
				<li>
					<a
						className='p-1 hover:bg-black/15 flex place-items-center place-content-center rounded-full transition-colors cursor-pointer'
						href='https://github.com/nicotapie30'
						target='blank'
					>
						<img src='src/assets/imgs/Github.svg' alt='Github' title='Github' />
					</a>
				</li>
				<li>
					<a
						className='p-1 hover:bg-black/15 flex place-items-center place-content-center rounded-full transition-colors cursor-pointer'
						href='https://www.linkedin.com/in/nicolasatapiedev30/'
						target='blank'
					>
						<img
							src='src/assets/imgs/Linkedin.svg'
							alt='Linkedin'
							title='Linkedin'
						/>
					</a>
				</li>
				<li>
					<a
						className='p-1 hover:bg-black/15 flex place-items-center place-content-center rounded-full transition-colors cursor-pointer'
						href='https://www.instagram.com/nicotapie1/'
						target='blank'
					>
						<img
							src='src/assets/imgs/Instagram.svg'
							alt='Instagram'
							title='Instagram'
						/>
					</a>
				</li>
				<li>
					<a
						className='p-1 hover:bg-black/15 flex place-items-center place-content-center rounded-full transition-colors cursor-pointer'
						href='mailto:nicoatapie@gmail.com'
						target='blank'
					>
						<img src='src/assets/imgs/Email.svg' alt='Email' title='Email' />
					</a>
				</li>
			</ul>
		</div>
	);
};
