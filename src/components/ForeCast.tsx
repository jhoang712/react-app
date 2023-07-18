import React, { useState, useEffect } from "react";
import { forecastData } from "../weather.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement } from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js/auto";

ChartJS.register(LineElement, CategoryScale, LinearScale);

const ForeCast = () => {
  const [chart, setChart] = useState([]);

  //   useEffect(() => {
  //     const dat = forecastData();
  //     // console.log("DAT = ", dat);
  //   });
  //   forecastData();
  useEffect(() => {
    console.log("WHATS GOIN ON");
    forecastData().then((res) => {
      console.log(res);
      setChart(res.data);
    });
  }, []);
  console.log("chart = ", chart);

  const hardcodedTime = [
    "2023-07-18",
    "2023-07-19",
    "2023-07-20",
    "2023-07-21",
    "2023-07-22",
    "2023-07-23",
    "2023-07-24",
  ];

  const hardcodedTemp = [87.3, 82.3, 79.1, 83.5, 90.3, 95.3, 94.9];

  var data = {
    labels: hardcodedTime,
    datasets: [
      {
        label: "Temp (°F)",
        data: hardcodedTemp,
        borderWidth: 1,
      },
    ],
  };

  //   var data = {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ForeCast;
