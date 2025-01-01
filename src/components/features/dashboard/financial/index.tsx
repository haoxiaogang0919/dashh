'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { TooltipItem } from 'chart.js';

import TimeRangeSelector from '@/components/common/TimeRangeSelector';
import ContentSection from '@/components/common/ContentSection';
import CardHeader from '@/components/common/CardHeader';
import TaskProgress from '@/components/common/TaskProgress';
const FinancialOverview = () => {
  const [timeRange, setTimeRange] = useState(0);

  const data = {
    labels: [
      'Jan 24',
      'Feb 24',
      'Mar 24',
      'Apr 24',
      'May 24',
      'Jun 24',
      'Jul 24',
      'Aug 24',
      'Sep 24',
      'Oct 24',
      'Nov 24',
      'Dec 24',
    ],
    datasets: [
      {
        label: 'Net Change',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], // Replace with actual data
        borderColor: 'rgb(38 104 255)',
        backgroundColor: '#E7E6E7',
        fill: false,
        borderWidth: 2,
        type: 'line', // Set this dataset as a bar char
      },
      {
        label: 'Inflow',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10], // Replace with actual data
        borderColor: 'rgb(34 197 94)',
        backgroundColor: 'rgb(34 197 94)',
        fill: true,
        borderWidth: 0,
        type: 'bar', // Set this dataset as a bar char
      },
      {
        label: 'Outflow',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // Replace with actual data
        borderColor: 'red',
        backgroundColor: 'red',
        fill: true,
        borderWidth: 2,
        type: 'bar', // Set this dataset as a bar char
      },
    ],
  };
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          // Y轴刻度也添加 $ 符号
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
            return context.dataset.label + ': $' + context.formattedValue;
          },
        },
      },
    },
  };

  return (
    <div>
      <CardHeader
        title="Financial Overview"
        href="/dashboard/finance"
      />

      <div className="grid grid-cols-1 gap-4">
        <ContentSection
          title="Cashflow Summary"
          rightContent={
            <TimeRangeSelector
              options={[
                { value: 0, label: '6 Months' },
                { value: 1, label: '12 Months' },
              ]}
              value={timeRange}
              onChange={setTimeRange}
            />
          }
        >
          <div className="h-[400px]">
            <Line
              data={data}
              options={options}
            />
          </div>
        </ContentSection>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <ContentSection
            title="Revenue Summary"
            rightContent={
              <TimeRangeSelector
                options={[
                  { value: 0, label: '6 Months' },
                  { value: 1, label: '12 Months' },
                ]}
                value={timeRange}
                onChange={setTimeRange}
              />
            }
          >
            <div>
              <TaskProgress  value={100} variant="blue"/>
            </div>
          </ContentSection>
          <ContentSection
            title="Expense Summary"
            rightContent={
              <TimeRangeSelector
                options={[
                  { value: 0, label: '6 Months' },
                  { value: 1, label: '12 Months' },
                ]}
                value={timeRange}
                onChange={setTimeRange}
              />
            }
          >
            <div>
              <TaskProgress value={20} variant="green" />
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
