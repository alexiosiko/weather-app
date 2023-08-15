import React from "react";
import Day from "./Day";

type WeekProps = {
	apparent_temperature_max: Array<number>,
	apparent_temperature_min: Array<number>,
	time: Array<number>,
	weathercode: Array<number>
}

const Week: React.FC<WeekProps> = (props: WeekProps) => {
	return (
		<div className="p-3 m-3 rounded-2xl" style={{ backgroundColor: 'var(--color-background-primary'}} >
			<div className="grid grid-cols-4 m-2 rounded-xl text-center" style={{}}>
				<p>Day</p>
				<p>High</p>
				<p>Low</p>
				<p>Sky</p>
			</div>
			{props.apparent_temperature_max&& props.apparent_temperature_max.map((maxTemp, index) => (
				<Day
					key={index}
					apparent_temperature_max={maxTemp}
					apparent_temperature_min={props.apparent_temperature_min[index]}
					time={props.time[index]}
					weathercode={props.weathercode[index]}
					index={index}
				/>
				)
			)}
			
		</div>
	)
}
export default Week;