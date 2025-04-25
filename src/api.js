
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9ec2001469mshb15a0b2e7df3160p1683bbjsnf75a40e01d3d',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';
export const WEATHER_API_KEY = '17db38390cdfcf59c26fa4f4aedfd132';

// onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}