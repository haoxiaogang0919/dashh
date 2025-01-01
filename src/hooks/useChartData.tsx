import { useState, useCallback } from 'react';

const timeConfigMap = {
  'Last 7 days': (today: Date, formatter: Intl.DateTimeFormat) => {
    const labels = Array.from({length: 7}, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (6 - i));
      return formatter.format(date);
    });
    return { labels, dataPoints: 7 };
  },
  
  'Last 30 days': (today: Date, formatter: Intl.DateTimeFormat) => {
    const labels = Array.from({length: 30}, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (29 - i));
      return formatter.format(date);
    });
    return { labels, dataPoints: 30 };
  },
  
  'Last 90 days': (today: Date) => {
    const labels = Array.from({length: 3}, (_, i) => {
      const date = new Date(today);
      date.setMonth(today.getMonth() - (2 - i));
      return new Intl.DateTimeFormat('zh-CN', { month: 'short' }).format(date);
    });
    return { labels, dataPoints: 3 };
  },
  
  'Last 6 Months': () => ({
    labels: ["7月", "8月", "9月", "10月", "11月", "12月"],
    dataPoints: 6
  }),
  
  'Last 12 Months': () => ({
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dataPoints: 12
  }),
  
  'Year to Date': (today: Date) => {
    const currentMonth = today.getMonth();
    const labels = Array.from({length: currentMonth + 1}, (_, i) => {
      const date = new Date(today.getFullYear(), i, 1);
      return new Intl.DateTimeFormat('zh-CN', { month: 'short' }).format(date);
    });
    return { labels, dataPoints: currentMonth + 1 };
  }
} as const;

export const useChartData = () => {
  const [selectedTime, setSelectedTime] = useState("Last 6 Months");
  const [labels, setLabels] = useState(["7月", "8月", "9月", "10月", "11月", "12月"]);
  const [chartData, setChartData] = useState({
    profit: [0, 0, 0, 0, 0, 2],
    revenue: [0, 0, 0, 0, 0, 2],
    expenses: [0, 0, 0, 0, 2, 0],
    time: [0, 0, 0, 0, 0, 0]
  });

  const getTimeConfig = useCallback((range: string) => {
    const today = new Date();
    const formatter = new Intl.DateTimeFormat('zh-CN', { month: 'short', day: 'numeric' });
    
    const configFn = timeConfigMap[range as keyof typeof timeConfigMap] || timeConfigMap['Last 6 Months'];
    return configFn(today, formatter);
  }, []);

  const generateChartData = useCallback((dataPoints: number) => ({
    profit: Array(dataPoints).fill(0).map(() => Math.random() * 2),
    revenue: Array(dataPoints).fill(0).map(() => Math.random() * 2),
    expenses: Array(dataPoints).fill(0).map(() => Math.random() * 2),
    time: Array(dataPoints).fill(0).map(() => Math.random() * 10)
  }), []);

  const handleTimeChange = useCallback((time: string) => {
    setSelectedTime(time);
    const { labels: newLabels, dataPoints } = getTimeConfig(time);
    setLabels(newLabels);
    setChartData(generateChartData(dataPoints));
  }, [getTimeConfig, generateChartData]);

  return {
    selectedTime,
    labels,
    chartData,
    handleTimeChange
  };
}; 