


const url = 'https://football-pro.p.rapidapi.com/api/v2.0/players/1743?include=stats&seasons=16036&tz=Europe%2FAmsterdam';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'bf24376c62msh6ba0d8cf5348847p1f212cjsn51d38164dcc0',
		'X-RapidAPI-Host': 'football-pro.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
