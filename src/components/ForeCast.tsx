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
  forecastData();
  useEffect(() => {
    try {
      console.log("WHATS GOIN ON");
      //   forecastData();
    } catch (error) {
      console.log(error);
    }
  });

  var data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  };

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
