import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { WeatherMain } from './components/Main/WeatherMain';

export default function App() {
	return (
		<div className='w-full h-full lg:flex lg:flex-col lg:place-items-center bg-gradient-to-b from-cyan-900 to-gray-200'>
			<Header />

			<WeatherMain />

			<Footer />
		</div>
	);
}
