import HourlyDisplay from "./HourlyDisplay";
import Today from "./Today";

type CenterProps = {
	data: any
	location: string
}

const Center: React.FC<CenterProps> = ({ data, location} ) => {
	return (
		<div className="p-3">
			<Today currentWeather={data.current_weather} location={location} />

			<section className="flex rounded-2xl p-5 flex-row w-full justify-evenly">
				<HourlyDisplay hourlyData={data.hourly} index={0} />
				<HourlyDisplay hourlyData={data.hourly} index={1} />
				<HourlyDisplay hourlyData={data.hourly} index={2} />
				<HourlyDisplay hourlyData={data.hourly} index={3} />
				<HourlyDisplay hourlyData={data.hourly} index={4} />
				<HourlyDisplay hourlyData={data.hourly} index={5} />
				<HourlyDisplay hourlyData={data.hourly} index={6} />
			</section>
		</div>
	)
}
export default Center;