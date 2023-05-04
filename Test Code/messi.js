// Make an API request to get Lionel Messi's stats
fetch('https://api.football-data.org/v2/players/209331', {
	headers: {
		'X-Auth-Token': '4274906ffd9d4656a8ec3465ac653acd'
	}
})
	.then(response => response.json())
	.then(data => {
		// Use the stats data in your HTML
		document.getElementById('name').textContent = data.name;
		document.getElementById('position').textContent = data.position;
		document.getElementById('shirtNumber').textContent = data.shirtNumber;
		document.getElementById('nationality').textContent = data.nationality;
		document.getElementById('dateOfBirth').textContent = data.dateOfBirth;
		document.getElementById('height').textContent = data.height;
		document.getElementById('weight').textContent = data.weight;
		document.getElementById('currentTeam').textContent = data.currentTeam.name;
		document.getElementById('goals').textContent = data.numberOfGoals;
		document.getElementById('assists').textContent = data.numberOfAssists;
	})
	.catch(error => console.error(error));
