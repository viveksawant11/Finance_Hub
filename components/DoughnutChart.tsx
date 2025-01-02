"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: Array<{ name: string; value: number }>; // Define the structure of accounts
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: accounts.map((account) => account.value), // Extract values for the chart
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accounts.map((account) => account.name), // Extract labels for the chart
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
