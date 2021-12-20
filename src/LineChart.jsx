import "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
import { currencyFormatter } from "./currencyFormatter";
import { timeFormat } from "./timeFormat";

function BarChart({ currencyCode, currencyDetails, inputValue }) {
  return (
    <>
      <Line
        data={{
          labels: currencyDetails.prices
            .slice(0, 7)
            .map((item) => timeFormat("", item.updatedAt)),
          datasets: [
            {
              data: currencyDetails.prices
                .slice(0, 7)
                .map((item) =>
                  currencyFormatter(currencyCode, item.price, inputValue, true)
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
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";

                  if (label) label += ": ";

                  if (context.parsed.y !== null) {
                    const list = {
                      USD: { operation: (a, b) => (b < 0.0 ? a : b / a) },
                      VES: { operation: (a, b) => a / b },
                    };
                    const value = list[currencyCode].operation(
                      context.parsed.y,
                      inputValue
                    );

                    label += currencyFormatter(currencyCode, value, inputValue);
                  }
                  return label;
                },
              },
            },
          },
        }}
      />
    </>
  );
}

export default BarChart;
