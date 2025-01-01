// 图表数据集配置
export const metricsDatasetConfig = {
  data: [65, 59, 80, 81, 56, 55, 40],
  pointRadius: 3,
  pointHoverRadius: 3.5,
  borderWidth: 3,
  fill: true,
  backgroundColor: 'rgba(34, 197, 94, 0.1)',
  borderColor: 'rgb(34 197 94)',
  pointBackgroundColor: "rgba(34, 197, 94, 0.1)",
  pointBorderWidth: 1,
  tension: 0.1,
} as const;



// 图表选项配置
export const metricsChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 0,
    },
  }
} as const;


