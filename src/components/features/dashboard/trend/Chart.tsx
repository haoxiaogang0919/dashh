"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  ChartOptions,
} from "chart.js";

// 组件导入
import ChartItem from "./MetricCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 配置导入
import {  TIME_RANGE_OPTIONS } from '@/constants/timeRanges';
import { chartOptions,  } from '@/config/features/trend/chart';
import { datasetConfigs, commonDatasetProps } from '@/config/features/trend/datasets';
import {KpiToggleProps } from "@/types/components/chart";
import {KPI_TOGGLES} from '@/config/features/trend/kpi-toggles'
import { useChartData } from '@/hooks/useChartData';



const DashboardChart = () => {
  // 状态管理
  const [chartState, setChartState] = useState<KpiToggleProps[]>(KPI_TOGGLES);
  const [timeAxisMax, setTimeAxisMax] = useState(12);
  const { selectedTime, labels, chartData, handleTimeChange } = useChartData();

  // 可见性映射
  const visibilityMap = useMemo(() => {
    return chartState.reduce(
      (acc, item) => ({
        ...acc,
        [item.datasetKey]: item.active,
      }),
      {} as Record<string, boolean>
    );
  }, [chartState]);

  // 图表数据配置
  const data = {
    labels,
    datasets: Object.entries(datasetConfigs).map(([key, config]) => ({
      ...config,
      ...commonDatasetProps,
      data: chartData[key as keyof typeof chartData],
      hidden: !visibilityMap[key],
    }))
  };

  // 图表选项配置
  const options = {
    ...chartOptions,
    scales: {
      ...(chartOptions.scales as NonNullable<typeof chartOptions.scales>),
      time: {
        ...chartOptions.scales?.time,
        max: timeAxisMax,
      }
    }
  } satisfies ChartOptions<'line'>;

  // 事件处理
  const handleToggleVisibility = (datasetKey: KpiToggleProps["datasetKey"]) => {
    setChartState(prev =>
      prev.map(item =>
        item.datasetKey === datasetKey
          ? { ...item, active: !item.active }
          : item
      )
    );

    if (datasetKey === 'time') {
      setTimeAxisMax(prev => prev === 12 ? 3 : 12);
    }
  };

  // 渲染图表控制器
  const renderChartControls = () => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
      <div className="flex gap-4">
        {chartState.map(item => (
          <ChartItem
            key={item.name}
            {...item}
            onToggle={() => handleToggleVisibility(item.datasetKey)}
          />
        ))}
      </div>
      <TimeRangeSelector 
        selectedTime={selectedTime}
        onTimeChange={handleTimeChange}
      />
    </div>
  );

  return (
    <div className="w-full bg-white rounded-3xl p-8 shadow-sm">
      {renderChartControls()}
      <div className="relative h-[50vh] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

// 时间范围选择器组件
const TimeRangeSelector = ({ 
  selectedTime, 
  onTimeChange 
}: { 
  selectedTime: string; 
  onTimeChange: (time: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl border border-gray-200/50 transition-all duration-300 ease-out hover:scale-[1.02]">
        <Calendar className="w-4 h-4" />
        <span>{selectedTime}</span>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent 
      align="end"
      side="bottom"
      alignOffset={-5}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-md w-[200px] p-2 absolute right-0 mt-2",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2"
      )}
    >
      {TIME_RANGE_OPTIONS.map(time => (
        <DropdownMenuItem
          key={time}
          onClick={() => onTimeChange(time)}
          className={cn("rounded-xl cursor-pointer")}
        >
          <span>{time}</span>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default DashboardChart;
