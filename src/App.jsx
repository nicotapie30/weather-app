import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export default function App() {
	return (
		<div className='w-full h-full bg-gradient-to-b from-cyan-900 to-gray-200'>
			<Header />

			<Main />

			<Footer />
		</div>
	);
}
