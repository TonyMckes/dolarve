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
              label: "",
              data: currencyDetails.prices
                .slice(0, 7)
                .map((item) =>
                  currencyFormatter(currencyCode, item.price, inputValue, true)
                ),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";

                  if (label) label += ": ";

                  if (context.parsed.y !== null) {
                    if (currencyCode === "USD") {
                      return (label += currencyFormatter(
                        currencyCode,
                        inputValue / context.parsed.y,
                        inputValue
                      ));
                    }

                    label += currencyFormatter(
                      currencyCode,
                      context.parsed.y,
                      inputValue
                    );
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
