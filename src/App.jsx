import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { WeatherMain } from './components/Main/WeatherMain';

export default function App() {
	return (
		<>
			<div class='inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] -z-10'>
				<div class='bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#98b2b5,transparent)]'>
					<Header />

					<WeatherMain />
				</div>
			</div>

			<Footer />
		</>
	);
}
