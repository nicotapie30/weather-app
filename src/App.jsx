import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { WeatherMain } from './components/Main/WeatherMain';

export default function App() {
	return (
		<div className='inset-0 -z-10 h-full w-full xl:flex xl:flex-col bg-white [background:radial-gradient(125%_95%_at_50%_10%,#73e_40%,#fff_100%)]'>
			<Header />

			<WeatherMain />

			<Footer />
		</div>
	);
}
