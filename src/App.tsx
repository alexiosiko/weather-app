import React, { useEffect, useState } from "react";
import Week from "./components/Week";
import Center from './components/Center';
import { getAreaFromCoordinates, getWeather } from "./api/WeatherApi";

const App: React.FC = () => {
	const [data, setData] = useState<any>({});
	const [location, setLocation] = useState<string>("");
	
	function positionSuccess({ coords }: { coords: any }) : any {
		getAreaFromCoordinates(coords.latitude, coords.longitude).then(result => setLocation(result));

		getWeather(coords.latitude, coords.longitude, Intl.DateTimeFormat().resolvedOptions().timeZone)
		.then((data) => {
      	setData(data);
    	});
	}
	function positionError() {
		alert("Please allow access to your location");
	}


	useEffect(() => {
		navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
	}, [])

	return (
		<div className='w-full fade-in p-5xlz max-w-7xl m-auto'>
			<Center data={data} location={location} />
			<Week  {...data.daily} />
		</div>
	)
}

export default App;
