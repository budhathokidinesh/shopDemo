import React from "react";
import "./CustomerReview.css";
import Chart from "react-apexcharts";
const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2025-02-19T00:00:00.000Z",
          "2025-02-19T01:00:00.000Z",
          "2025-02-19T02:00:00.000Z",
          "2025-02-19T03:00:00.000Z",
          "2025-02-19T04:00:00.000Z",
          "2025-02-19T05:00:00.000Z",
          "2025-02-19T06:00:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
    },
  };
  return (
    <div className="CustomerReview">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;
