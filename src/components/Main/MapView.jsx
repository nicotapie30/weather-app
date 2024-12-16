import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/Leaflet.css';
import { useEffect } from 'react';

const MapView = ({ location }) => {
	const map = useMap();

	useEffect(() => {
		if (location) {
			map.setView([location.lat, location.lon], 13);
		}
	}, [location, map]);

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>

			{location && (
				<Marker position={{ lat: location.lat, lng: location.lon }}>
					<Popup>Tu clima</Popup>
				</Marker>
			)}
		</>
	);
};

export const MapContainerComponent = ({ location }) => {
	return (
		<MapContainer
			className='w-full h-full'
			center={location ? [location.lat, location.lon] : [0, 0]}
			zoom={13}
		>
			<MapView location={location} />
		</MapContainer>
	);
};
