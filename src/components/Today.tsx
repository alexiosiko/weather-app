import React from "react";
import { getDayOfWeek, weatherCodeToImage } from "../api/WeatherApi";
import marker from "./../images/marker.png";

type CurrentWeather = {
	is_day: number,
	temperature: number,
	time: number,
	weathercode: number,
	winddirection: number,
};

type TodayProps = {
	currentWeather: CurrentWeather;
	location: string;
};

const Today: React.FC<TodayProps> = (props: TodayProps) => {
	return (
		<section className="">
			<div className="w-100 m-auto text-center">
				<h1 className="text-4xl m-5 font-bold">
					{getDayOfWeek(props.currentWeather?.is_day)}
				</h1>
				<img
					src={weatherCodeToImage(props.currentWeather?.weathercode)}
					alt="weather"
					width={120}
					className="self-center m-auto"
				/>
				<div className="text-3xl font-bold">
					{props.currentWeather?.temperature}°
				</div>
				<div className="flex pt-5 justify-center items-center">
					<img src={marker} alt="marker" width={30} className="mr-2" />
					<div className="text-3xl font-bold">{props?.location}</div>
				</div>
			</div>
		</section>
	);
};

export default Today;