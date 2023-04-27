// Data
const data = {
    datasets: [{
        label: 'Goals',
        data: [
            { x: '2010-2011', y: 12 },
            { x: '2011-2012', y: 21 },
            { x: '2012-2013', y: 17 },
            { x: '2013-2014', y: 25 },
            { x: '2014-2015', y: 30 },
            { x: '2015-2016', y: 28 },
            { x: '2016-2017', y: 18 },
            { x: '2017-2018', y: 22 },
            { x: '2018-2019', y: 27 },
            { x: '2019-2020', y: 23 },
            { x: '2020-2021', y: 29 }
        ],
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'blue',
        pointHoverBackgroundColor: 'white',
        showLine: true
    }]
};

// Options
const options = {
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'year',
                displayFormats: {
                    year: 'YYYY-YYYY'
                }
            },
            scaleLabel: {
                display: true,
                labelString: 'Season'
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: 'Goals'
            }
        }]
    }
};

// Chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: options
});
