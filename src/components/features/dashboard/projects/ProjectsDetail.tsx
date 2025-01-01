'use client';

import {
  ArrowLeftIcon,
  Folder,
  ChartNoAxesColumn,
  Clock,
  DollarSign,
  Receipt,
  Settings,
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatValue, formatDate } from '@/lib/utils/formatters';
import Tags from '@/components/common/Tags';
import Tabs from '@/components/common/Tabs';

import TableToolbar from '@/components/common/TableToolbar';
import Chart from '@/components/features/dashboard/trend/Chart';
import MetricsGrid from '@/components/features/dashboard/metrics/MetricsGrid';
import { metricsDataGroups } from '@/config/features/metrics/config';
import { DataTable } from '@/components/common/DataTable';
import { ColumnDef } from '@tanstack/react-table';

interface Props {
  project_id: string;
}



const ProjectsDetail = ({ project_id }: Props) => {
  const metrics = metricsDataGroups.keyMetrics.metrics;
  
 

  
  interface TableRow {
    id: number;
    type: string;
    amount: number;
    date: string;
    description: string | null;
    status: string;
    projectId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    recurringTransactionId: number | null;
    expenseCategoryId: number | null;
    revenueCategoryId: number | null;
    project: {
      id: number;
      name: string;
      hashId: string;
      imageUrl: string | null;
    };
    expenseCategory: {
      id: number;
      name: string;
    } | null;
    revenueCategory: {
      id: number;
      name: string;
    } | null;
  }


  // 定义列配置
  const columns: ColumnDef<TableRow>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
      enableSorting: true,
      cell: ({ row }) => formatDate(row.getValue('date')),
    },
    {
      accessorKey: 'type',
      header: 'Type',
      enableSorting: true,
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => formatValue(row.getValue('amount'), 'currency'),
      enableSorting: true,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: true,
    },
    {
      accessorKey: 'project.name',
      header: 'Project',
      enableSorting: true,
    },
    {
      accessorKey: 'revenueCategory.name',
      header: 'Category',
      enableSorting: true,
    },
    {
      accessorKey: 'description',
      header: 'Description',
      enableSorting: true
    },
  ];
  
  const tableData: TableRow[] = [
    {
      id: 132,
      type: 'REVENUE',
      amount: 12,
      date: '2024-12-30T00:00:00',
      description: null,
      status: 'PAID',
      projectId: 25,
      userId: 28,
      createdAt: '2024-12-30T07:22:54.009',
      updatedAt: '2024-12-30T07:22:54.009',
      recurringTransactionId: null,
      expenseCategoryId: null,
      revenueCategoryId: 28,
      project: {
        id: 25,
        name: 'game',
        hashId: 'i7LfshBm',
        imageUrl: null,
      },
      expenseCategory: null,
      revenueCategory: {
        id: 28,
        name: 'aa',
      },
    },
    {
      id: 134,
      type: 'REVENUE',
      amount: 22,
      date: '2024-12-30T00:00:00',
      description: null,
      status: 'PAID',
      projectId: 25,
      userId: 28,
      createdAt: '2024-12-30T07:46:38.094',
      updatedAt: '2024-12-30T07:46:38.094',
      recurringTransactionId: null,
      expenseCategoryId: null,
      revenueCategoryId: null,
      project: {
        id: 25,
        name: 'game',
        hashId: 'i7LfshBm',
        imageUrl: null,
      },
      expenseCategory: null,
      revenueCategory: null,
    },
    {
      id: 133,
      type: 'EXPENSE',
      amount: 12,
      date: '2024-12-29T00:00:00',
      description: '',
      status: 'PAID',
      projectId: 25,
      userId: 28,
      createdAt: '2024-12-30T07:23:35.451',
      updatedAt: '2024-12-30T07:23:47.804',
      recurringTransactionId: null,
      expenseCategoryId: 14,
      revenueCategoryId: null,
      project: {
        id: 25,
        name: 'game',
        hashId: 'i7LfshBm',
        imageUrl: null,
      },
      expenseCategory: {
        id: 14,
        name: 'dd',
      },
      revenueCategory: null,
    },
  ];
  
  const tabs = [
    {
      label: 'Overview',
      icon: (
        <ChartNoAxesColumn
          width={16}
          height={16}
        />
      ),
      content: (
        <div className="space-y-6">
          <Chart />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(metrics).map(([key, metric]) => (
              <MetricsGrid
                key={key}
                {...metric}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'TimeSheet',
      icon: (
        <Clock
          width={16}
          height={16}
        />
      ),
      content: (
        <div className="space-y-4">
          <TableToolbar />
          <DataTable columns={columns} data={tableData} />
        </div>
      ),
    },
    {
      label: 'Revenue',
      icon: (
        <DollarSign
          width={16}
          height={16}
        />
      ),
      content: <div>12321</div>,
    },
    {
      label: 'Expenses',
      icon: (
        <Receipt
          width={16}
          height={16}
        />
      ),
      content: <div>12321</div>,
    },
    {
      label: 'Settings',
      icon: (
        <Settings
          width={16}
          height={16}
        />
      ),
      content: <div>12321</div>,
    },
  ];
  const GoBackLink = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/dashboard/projects');
    };
    return (
      <button
        className="-ml-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl
          px-3 text-xs font-medium text-muted-foreground transition-all duration-300
          ease-out hover:scale-[1.02] hover:bg-gray-100/50 hover:text-foreground
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
          dark:text-gray-100 dark:hover:bg-gray-800/50"
        onClick={handleClick}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        <span>Back to Projects</span>
      </button>
    );
  };

  const DetailHeader = () => {
    return (
      <div className="mb-6 flex w-full flex-row gap-6">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br
            from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 sm:h-16 sm:w-16
            sm:rounded-lg"
        >
          <Folder className="h-12 w-12 text-gray-400 dark:text-gray-600 sm:h-8 sm:w-8" />
        </div>
        <div
          className="flex flex-1 flex-col items-center space-y-2 text-center sm:items-start
            sm:text-left"
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
            <h2 className="text-2xl font-bold">game</h2>
            <div
              className="inline-flex w-fit items-center rounded-full border border-transparent
                bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground
                transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2
                focus:ring-ring focus:ring-offset-2"
            >
              ACTIVE
            </div>
          </div>
          <Tags />
        </div>
      </div>
    );
  };


  return (
    <div className="flex flex-col flex-wrap items-start justify-start gap-6">
      <GoBackLink />
      <DetailHeader />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ProjectsDetail;
