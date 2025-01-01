'use client';


import { InfoIcon } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import * as HoverCard from '@radix-ui/react-hover-card';
import DisplayValue from '@/components/common/DisplayValue'
import { MetricConfig } from '@/types/components/metrics';
import { metricsChartOptions, metricsDatasetConfig } from '@/config/features/metrics/chart-options'


const MetricsGrid = ({title, icon, format, description}: MetricConfig) => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        ...metricsDatasetConfig,
        label: title
      }
    ],
  };



  
  const MetricsTitle = () => {
    return (
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-row items-center gap-2">
           {icon}
          <h3 className="break-words text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">
            {title}
          </h3>
        </div>
        <HoverCard.Root
          openDelay={0}
          closeDelay={0}
        >
          <HoverCard.Trigger asChild>
            <button
              className="shrink-0 rounded-full p-1 hover:bg-gray-100 active:bg-gray-200
                dark:hover:bg-gray-800 dark:active:bg-gray-700"
            >
              {<InfoIcon className="h-4 w-4 text-gray-500" />}
            </button>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="HoverCardContent z-50"
              side="top"
              sideOffset={5}
            >
              <div className="box-border w-[21rem] rounded-lg bg-gray-900 px-3 py-2 text-center text-xs">
                <span className="text-white">
                  {description}
                </span>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    );
  };

  const MetricsChart = () => {
    return (
      <div className="h-24">
        <Line
          data={data}
          options={metricsChartOptions}
        />
      </div>
    );
  };

  const MetricsTarget = () => {
    return (
      <div className="space-y-2 pt-2">
      <button
        className="w-full rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500
          transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
         Set Target
        </button>
      </div>
    );
  };
  


  return (
    <div className="rounded-2xl border border-gray-200 bg-white/50 p-6 backdrop-blur-sm">
      <MetricsTitle />
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
        <DisplayValue  value={13} type={format}/>
        </p>
        <p className="text-xs font-medium text-green-500 sm:text-sm">
          +13.0 change
        </p>
      </div>
      <MetricsChart />
      <MetricsTarget />
    </div>
  );
};

export default MetricsGrid;
