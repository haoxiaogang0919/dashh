//将图表配置和数据分开，方便后续维护
import { ChartOptions, TooltipItem } from "chart.js";
import { TIME_RANGE_OPTIONS } from "@/constants/timeRanges";

export const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  animation: {
    duration: 750,
    easing: "easeOutQuart" as const,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(31, 41, 55, 0.95)",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: {
        top: 10,
        right: 12,
        bottom: 10,
        left: 12,
      },
      displayColors: true,
      boxPadding: 6,
      usePointStyle: true,
      titleFont: {
        size: 13,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
        weight: "normal",
      },
      callbacks: {
        title: (items: TooltipItem<"line">[]) => items[0].label,
        label: (context: TooltipItem<"line">) => {
          const label = context.dataset.label || "";
          const value = context.parsed.y.toFixed(2);
          if (label === "Time") {
            return `${label}: ${value}h`;
          }
          return `${label}: $${value}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Period",
        color: "#6B7280",
      },
      grid: {
        display: false, // 隐藏 X 轴（months）的网格线
        drawOnChartArea: false,
      },
    },
    amount: {
      title: {
        display: true,
        text: "Amount ($)",
        color: "#6B7280",
        font: {
          size: 11,
          weight: 500,
        },
      },
      position: "left" as const,
      min: -0.5,
      max: 2.5,
      
      grid: {
        display: false, // 隐藏左侧轴的网格线
        drawOnChartArea: false, // 确保网格线不会绘制在图表区域
      },
      ticks: {
        callback: function(tickValue: number | string) {
          if (typeof tickValue === 'number') {
            return `$${tickValue}`;
          }
          return tickValue;
        },
        color: "#6B7280",
        font: {
          size: 11,
        },
        stepSize: 0.5,
      },
    },
    time: {
      title: {
        display: true,
        text: "Time (hours)",
        font: {
          size: 11,
        },
        color: "#6B7280",
      },

      position: "right" as const,
      min: 0,
      max: 12,

      grid: {
        display: false, // 隐藏右侧轴的网格线
        drawOnChartArea: false, // 确保网格线不会绘制在图表区域
      },

      ticks: {
        callback: function(tickValue: number | string) {
          if (typeof tickValue === 'number') {
            if (tickValue === 12) return "";
            return `${tickValue}.0h`;
          }
          return tickValue;
        },
        color: "#6B7280",
        font: {
          size: 12,
          weight: 500,
        },
        stepSize: 1,
      },
    },
  },
};


export type TimeRangeType = (typeof TIME_RANGE_OPTIONS)[number]; 
