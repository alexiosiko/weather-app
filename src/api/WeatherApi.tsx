import axios from "axios";
import cloudy from './../images/cloudy.png';
import cloud from './../images/cloud.png';
import rain from './../images/rain.png';
import showers from './../images/showers.png';
import sunny from './../images/sunny.png';
import thunder from './../images/thunder.png';
import snowing from './../images/snowing.png';

export {
	cloud,
	rain,
	showers,
	sunny,
	thunder,
	snowing
}

// https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m&daily=weathercode,apparent_temperature_max,apparent_temperature_min&current_weather=true&timeformat=unixtime&

export async function getWeather(lat: number, lon: number, timezone: any) {
	return axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m&daily=weathercode,apparent_temperature_max,apparent_temperature_min&current_weather=true&timeformat=unixtime&", {
		params: {
			latitude: lat,
			longitude: lon,
			timezone: timezone
		}
	}).then(({data}) => {
		return data;
	});
}
export function weatherCodeToString(code: number): string {
	switch (code) {
		case 0: 					return "sunny";
		case 1: case 2: case 3: 	return "sunny";
		case 45: case 48: 			return "cloudy";
		case 51: case 53: case 55: 	return "rain";
		case 56: case 57: 			return "rain";
		case 61: case 63: case 65: 	return "rain";
		case 66: case 67: 			return "rain";
		case 71: case 73: case 75: 	return "snowing";
		case 77:			 		return "snowing";
		case 80: case 81: case 82: 	return "showers";
		case 85: case 86: 			return "snowing";
		case 95: case 96: case 99:	return "thunder";
	}
	return "Error converting weather code";
}

export function weatherCodeToImage(code: number): string {
	switch (code) {
		case 0: 					return sunny;
		case 1: case 2: case 3: 	return sunny;
		case 45: case 48: 			return cloudy;
		case 51: case 53: case 55: 	return rain;
		case 56: case 57: 			return rain;
		case 61: case 63: case 65: 	return rain;
		case 66: case 67: 			return rain;
		case 71: case 73: case 75: 	return snowing;
		case 77:			 		return snowing;
		case 80: case 81: case 82: 	return showers;
		case 85: case 86: 			return snowing;
		case 95: case 96: case 99:	return thunder;
	}
	return "erorr";
}
export function getDayOfWeek(index: number) : String {
	switch (index) {
		case 0: return "Sunday";
		case 1: return "Monday";
		case 2: return "Tuesday";
		case 3: return "Wednesday";
		case 4: return "Thursday";
		case 5: return "Friday";
		case 6: return "Saturday";
		default: return "";
	}
}

export function formatTime(time: number): string {
	if (time === undefined)
		return "";
	let s = new Date(time * 1000).toLocaleTimeString();
	let amOrPm = s.substring(s.length - 2, s.length);
	s = s.substring(0, s.length - 6);
	return s + " " + amOrPm;
}

export async function getAreaFromCoordinates(latitude: number, longitude: number) {
  const apiKey = "0e2692f3861b401996f483b17bc3226f"; // Replace with your actual API key
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude},${longitude}&no_annotations=1`;

  try {
    const response = await axios.get(apiUrl);
    const results = response.data.results;

    if (results.length > 0) {
      const location = results[0].components;
      const area = location.city || location.town || location.village || location.county || location.state;

      return area;
    } else {
      return "Unknown Area";
    }
  } catch (error) {
    console.error("Error fetching area information:", error);
    return "Error location";
  }
}

