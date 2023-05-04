const graphs = {
	graph1: {
		x: [1, 2, 3, 4, 5],
		y: [10, 20, 30, 40, 50],
		title: 'Graph 1',
	},
	graph2: {
		x: [1, 2, 3, 4, 5],
		y: [50, 40, 30, 20, 10],
		title: 'Graph 2',
	},
	graph3: {
		x: [1, 2, 3, 4, 5],
		y: [25, 15, 35, 45, 5],
		title: 'Graph 3',
	}
};

const graphSelect = document.getElementById('graph-select');
const graphContainer = document.getElementById('graph-container');

graphSelect.addEventListener('change', (event) => {
	const selectedGraph = event.target.value;

	if (selectedGraph) {
		const graphData = graphs[selectedGraph];
		plotGraph(graphData);
	}
});

function plotGraph(graphData) {
	const data = [{
		x: graphData.x,
		y: graphData.y,
		type: 'scatter',
		mode: 'lines+markers',
		marker: {color: 'blue'},
		line: {width: 2},
	}];
	const layout = {
		title: graphData.title,
		xaxis: {title: 'X-axis'},
		yaxis: {title: 'Y-axis'}
	};
	Plotly.newPlot(graphContainer, data, layout);
}
