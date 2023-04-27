// Get the canvas element and set its width and height
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 400;

// Append the canvas to the chart container
const chartContainer = document.getElementById("chart-container");
chartContainer.appendChild(canvas);

// Create a new chart object
const ctx = canvas.getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
    datasets: [
      {
        label: "Goals",
        data: [15, 22, 30, 27, 35],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
