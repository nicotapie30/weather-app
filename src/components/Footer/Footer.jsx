import { Contact } from './Contact';
import { Copy } from './Copy';
import { Information } from './Information';

export const Footer = () => {
	return (
		<footer className='py-4 px-16 bg-slate-200 text-gray-800'>
			<section className='w-full mt-8 flex justify-between place-items-start'>
				<article className='text-center'>
					<Information />
				</article>
				<article className='text-center'>
					<Contact />
				</article>
			</section>
			<section>
				<article className='mt-6 border-t-2 border-gray-400'>
					<Copy />
				</article>
			</section>
		</footer>
	);
};
