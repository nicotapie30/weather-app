import { MapContainerComponent } from './MapView';

export const Map = ({ location, setLocation }) => {
	return (
		<section className='w-full h-72 mt-8 p-4 shadow-xl bg-slate-700/10 rounded-md overflow-hidden'>
			<MapContainerComponent location={location} setLocation={setLocation} />
		</section>
	);
};
