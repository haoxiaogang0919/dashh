//将图表配置和数据分开，方便后续维护
// 各自维护自己的数据
export const datasetConfigs = {
    profit: {
      label: "Profit",
      borderColor: "#0DA4E9",
      backgroundColor: "rgba(13, 164, 233, 0.1)",
      yAxisID: "amount",
    },
    revenue: {
      label: "Revenue",
      borderColor: "#22c55e",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      yAxisID: "amount",
    },
    expenses: {
      label: "Expenses",
      borderColor: "#f43f5e",
      backgroundColor: "rgba(244, 63, 94, 0.1)",
      yAxisID: "amount",
    },
    time: {
      label: "Time",
      borderColor: "rgb(168, 85, 247)",
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      yAxisID: "time",
    },
  };
  
  
  // 通用配置
export const commonDatasetProps = {
    pointRadius: 3,
    pointHoverRadius: 3.5,
    borderWidth: 3,
    tension: 0.4,
    fill: true,
    pointBackgroundColor: "rgba(255, 255, 255, 0.1)",
    pointBorderWidth: 1,
  }; 
  