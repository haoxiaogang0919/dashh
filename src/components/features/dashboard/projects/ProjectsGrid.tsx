'use client';

import { useRouter } from 'next/navigation';

import { Folder, DollarSign, TrendingUp, Receipt, Clock } from 'lucide-react';
import { Line } from 'react-chartjs-2';

import Tags from '@/components/common/Tags';

const ProjectsGrid = () => {
  const GridHeader = () => {
    return (
      <div className="items-left mb-4 flex flex-col gap-4 space-y-0 pb-0 md:flex-row md:items-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br
            from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
        >
          <Folder className="h-8 w-8 text-gray-400 dark:text-gray-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            game
          </h3>
          <p className="text-sm text-muted-foreground">No description</p>
        </div>
      </div>
    );
  };

 
  const GridData = () => {
    return (
      <div className="-mx-6 mb-6 flex gap-4 overflow-x-auto px-6 pb-2 scrollbar-hide">
        <div className="min-w-[100px] space-y-1 text-sky-500">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span className="whitespace-nowrap text-sm">Profit</span>
          </div>
          <p className="text-lg font-semibold">$1000</p>
        </div>
        <div className="min-w-[100px] space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span className="whitespace-nowrap text-sm">Revenue</span>
          </div>
          <p className="text-lg font-semibold">$1000</p>
        </div>
        <div className="min-w-[100px] space-y-1">
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4" />
            <span className="whitespace-nowrap text-sm">Expenses</span>
          </div>
          <p className="text-lg font-semibold">$1000</p>
        </div>
        <div className="min-w-[100px] space-y-1">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="whitespace-nowrap text-sm">Hours</span>
          </div>
          <p className="text-lg font-semibold">5m</p>
        </div>
      </div>
    );
  };

  const GridChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: 'rgb(34, 197, 94)',
          tension: 0.1,
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };
    return (
      <div className="h-32">
        <Line
          data={data}
          options={options}
        />
      </div>
    );
  };
  const router = useRouter()
  const handleClick = () => {
    setTimeout(() => {
      router.push('/dashboard/projects/1');
    }, 500);
  };

  return (
   
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200
        bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out
        hover:translate-y-[-4px] hover:border-gray-300/50 hover:bg-white/80
        hover:shadow-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:shadow-sm
        dark:hover:border-gray-700/50 dark:hover:bg-gray-900/80 dark:hover:shadow-md"
        onClick={handleClick}
    >
      <GridHeader />
      <Tags />
      <GridData />
      <GridChart />
    </div>
  );
};

export default ProjectsGrid;
