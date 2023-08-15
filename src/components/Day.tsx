import { getDayOfWeek, weatherCodeToImage } from "../api/WeatherApi";

export type DayType = {
	apparent_temperature_max: number,
	apparent_temperature_min: number,
	time: number,
	weathercode:  number,
	index: number,
}

const Day = (day: DayType) => {
	return (
		<div className="grid grid-cols-4 m-2 rounded-xl" style={{ backgroundColor: "var(--color-background-secondary"}}>
			<h3 className="w-150 text-center self-center">{getDayOfWeek(day.index)}</h3>
			<h2 className="text-center self-center" >{day.apparent_temperature_max}</h2>
			<h2 className="text-center self-center" >{day.apparent_temperature_min}</h2>
			<img src={weatherCodeToImage(day.weathercode)} width={100} className="m-auto" alt="weather"></img>
		</div>
	)
}


export default Day;