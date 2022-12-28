import {
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { formatCur, formatTime } from "utils";

Chart.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Title
);

Chart.defaults.color = "#8B8B8B";
const chartOptions = {
  responsive: true,
  scales: {
    y: { grid: { color: "#8B8B8B40" } },
    x: { grid: { color: "#8B8B8B40" } },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleAlign: "center",
      displayColors: false,
    },
  },
};

function LineChart({ currencyCode, prices, price, price24h }) {
  const colors =
    price24h > price ? "#F87171" : price24h < price ? "#4ADE80" : "#8B8B8B";

  const chartData = {
    labels: prices.map(({ updatedAt }) => formatTime("", updatedAt)),
    datasets: [
      {
        backgroundColor: `${colors}20`,
        borderColor: `${colors}`,
        borderWidth: 1,
        data: prices.map(({ price }) => formatCur(price, currencyCode, true)),
        fill: true,
        pointHitRadius: 6,
        pointHoverBorderWidth: 2,
        pointHoverRadius: 6,
        pointRadius: 4,
      },
    ],
  };

  return prices?.length > 0 && <Line data={chartData} options={chartOptions} />;
}

export default LineChart;
