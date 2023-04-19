var goalsTrace = {
	x: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7'],
	y: [5, 10, 15, 20, 25, 30, 35],
	mode: 'lines+markers',
	type: 'scatter',
	line: {
		color: 'blue',
		width: 3
	},
	marker: {
		size: 12,
		color: 'blue'
	},
	name: 'Goals'
};
var assistsTrace = {
	x: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7'],
	y: [3, 7, 10, 15, 18, 20, 22],
	mode: 'lines+markers',
	type: 'scatter',
	line: {
		color: 'green',
		width: 3
	},
	marker: {
		size: 12,
		color: 'green'
	},
	name: 'Assists'
};
var shotsTrace = {
	x: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7'],
	y: [20, 22, 25, 30, 28, 27, 30],
	mode: 'lines+markers',
	type: 'scatter',
	line: {
		color: 'red',
		width: 3
	},
	marker: {
		size: 12,
		color: 'red'
	},
	name: 'Shots on Target'
};
var layout = {
	title: 'Player Statistics',
	xaxis: {
		title: 'Season',
		showgrid: false,
		zeroline: false
	},
	yaxis: {
		title: 'Value',
		showline: false
	}
};
var data = [goalsTrace, assistsTrace, shotsTrace];

// Initialize
