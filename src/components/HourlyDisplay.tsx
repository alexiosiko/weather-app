import React from "react";
import { formatTime, weatherCodeToImage } from "../api/WeatherApi";


export type HourlyData = {
	apparent_temperature: Array<number>,
	time: Array<number>,
	weathercode: Array<number>,
}

type HourlyDisplayProps = {
	hourlyData: HourlyData,
	index: number,
};

const HourlyDisplay: React.FC<HourlyDisplayProps> = ({ hourlyData, index }) => {
	const apparentTemperature = hourlyData?.apparent_temperature[index];
	const time = hourlyData?.time[index];
	const weathercode : string = weatherCodeToImage(hourlyData?.weathercode[index]);


	
	return (
		<div className="hourly-display m-2 text-center ">
			{<img src={weathercode}  width={50}  className=" m-auto" alt="weatherimage" />}
			
			{<p className="text-xl font-bold">
					{apparentTemperature}°
				</p>}
				{<p className="text-sm mt-2">
					{formatTime(time)}
				</p>}
		</div>
	);
};

export default HourlyDisplay;