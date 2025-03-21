import { Contact } from './Contact';
import { Copy } from './Copy';
import { Information } from './Information';

export const Footer = () => {
	return (
		<footer className='w-full py-4 px-16 bg-slate-400/30 text-gray-800 max-[500px]:px-6'>
			<section className='w-full mt-8 flex justify-between place-items-start max-[500px]:flex-col gap-4 max-[500px]:place-items-center'>
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
