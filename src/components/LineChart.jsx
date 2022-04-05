import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { formatCur, formatTime } from "../utils";

function LineChart({ currencyCode, data }) {
  const { prices = [] } = data;

  return (
    <Line
      data={{
        labels: prices.map(({ updatedAt }) => formatTime("", updatedAt)),
        datasets: [
          {
            data: prices.map(({ price }) =>
              formatCur(price, currencyCode, true),
            ),
            backgroundColor: ["#00d48780"],
            borderColor: ["#00d487"],
            borderWidth: 1,
            fill: "origin",
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleAlign: "center",
            displayColors: false,
            // callbacks: {
            //   label: function (context) {
            //     let label = context.dataset.label || "";

            //     if (label) label += ": ";

            //     if (context.parsed.y !== null) {
            //       const list = {
            //         USD: { operation: (a, b) => (b < 0.0 ? a : b / a) },
            //         VES: { operation: (a, b) => a / b },
            //       };
            //       const value = list[currencyCode].operation(
            //         context.parsed.y,
            //         1,
            //       );

            //       label += formatCur(value, currencyCode, true);
            //     }

            //     return label;
            //   },
            // },
          },
        },
      }}
    />
  );
}

export default LineChart;
