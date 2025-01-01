import type { MetricConfig, MetricGroup } from '@/types/components/metrics';
import {pickKeys} from '@/lib/utils/object'
import { StyledIcon } from '@/components/ui/icons';

import {
    DollarSign,
    Calendar,
    PercentIcon,
    Receipt,
    TrendingDown,
    TrendingUp,
    Clock3,
    Clock,
    Activity,
    CircleCheckBig,
    Layers,
    ChartPie,
    Timer,
  } from 'lucide-react';
  
const MetricClass = 'text-blue-500 h-5 w-5';

  
// 指标配置
export const metricsDataConfigs: Record<string, MetricConfig> = {
    averageMonthlyRevenue: {
      title: 'Average Monthly Revenue',
      icon: (
        <StyledIcon
          icon={Calendar}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average amount of money your business earns each month over the past 6 months. This helps you understand your regular income and plan accordingly.',
    },
    averageMonthlyProfit: {
      title: 'Average Monthly Profit',
      icon: (
        <StyledIcon
          icon={DollarSign}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average profit your business makes each month over the past 6 months after subtracting expenses from revenue. This shows how much money you keep.',
    },
    profitMargin: {
      title: 'Profit Margin',
      icon: (
        <StyledIcon
          icon={PercentIcon}
          className={MetricClass}
        />
      ),
      format: 'percentage',
      description:
        'The percentage of revenue that remains as profit after all expenses are paid. A higher profit margin means your business is more efficient at making money.',
    },
    accountsReceivable: {
      title: 'Accounts Receivable',
      icon: (
        <StyledIcon
          icon={DollarSign}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The total amount of money owed to your business for completed work or sales. Monitoring this helps manage your cash flow.',
    },
    averageMonthlyExpenses: {
      title: 'Average Monthly Expenses',
      icon: (
        <StyledIcon
          icon={Receipt}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average amount your business spends each month over the past 6 months. Understanding your expenses helps you control costs.',
    },
    operatingEfficiency: {
      title: 'Operating Efficiency',
      icon: (
        <StyledIcon
          icon={TrendingDown}
          className={MetricClass}
        />
      ),
      format: 'percentage',
      description:
        'Your operating expenses as a percentage of your revenue. A lower percentage indicates better efficiency in managing costs relative to income.',
    },
    revenueGrowthRate: {
      title: 'Revenue Growth Rate',
      icon: (
        <StyledIcon
          icon={TrendingUp}
          className={MetricClass}
        />
      ),
      format: 'percentage',
      description:
        'The percentage increase in your revenue over a specific period. Positive growth means your business is earning more money over time.',
    },
    averageMonthlyHoursWorked: {
      title: 'Average Monthly Hours Worked',
      icon: (
        <StyledIcon
          icon={Clock3}
          className={MetricClass}
        />
      ),
      format: 'hours',
      description:
        'The average number of hours you work each month over the past 6 months. Helps you understand your workload and manage your time effectively.',
    },
    totalHoursWorked: {
      title: 'Total Hours Worked',
      icon: (
        <StyledIcon
          icon={Clock}
          className={MetricClass}
        />
      ),
      format: 'hours',
      description:
        "The total number of hours you've worked over a specified period. Useful for analyzing your productivity and capacity.",
    },
    totalBillableHours: {
      title: 'Total Billable Hours',
      icon: (
        <StyledIcon
          icon={Clock}
          className={MetricClass}
        />
      ),
      format: 'hours',
      description:
        'The total number of hours you can charge to projects. Tracking billable hours helps maximize your revenue.',
    },
    utilizationRate: {
      title: 'Utilization Rate',
      icon: (
        <StyledIcon
          icon={ChartPie}
          className={MetricClass}
        />
      ),
      format: 'percentage',
      description:
        'The percentage of your total available working hours that are billable to projects. A higher rate indicates efficient use of your time.',
    },
    averageProjectDuration: {
      title: 'Average Project Duration',
      icon: (
        <StyledIcon
          icon={Clock}
          className={MetricClass}
        />
      ),
      format: 'hours',
      description:
        'The average time it takes to complete a project. Understanding this helps in planning and improving efficiency.',
    },
    activeProjectCount: {
      title: 'Active Project Count',
      icon: (
        <StyledIcon
          icon={Activity}
          className={MetricClass}
        />
      ),
      format: 'number',
      description:
        "The number of projects you're currently working on. This gives you an idea of your current workload.",
    },
    completedProjectCount: {
      title: 'Completed Project Count',
      icon: (
        <StyledIcon
          icon={CircleCheckBig}
          className={MetricClass}
        />
      ),
      format: 'number',
      description:
        "The total number of projects you've finished. This reflects your productivity and experience.",
    },
    revenuePerProject: {
      title: 'Average Revenue per Project',
      icon: (
        <StyledIcon
          icon={Layers}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average amount of money earned from each project. Helps you assess the value and profitability of different projects.',
    },
    profitPerProject: {
      title: 'Average Profit per Project',
      icon: (
        <StyledIcon
          icon={DollarSign}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average profit made from each project after expenses. Shows which projects are most beneficial for your business.',
    },
    projectGrowthRate: {
      title: 'Project Growth Rate',
      icon: (
        <StyledIcon
          icon={TrendingUp}
          className={MetricClass}
        />
      ),
      format: 'percentage',
      description:
        'The monthly percentage increase or decrease in new projects. Indicates whether your business is expanding or slowing down.',
    },
    averageBillingRate: {
      title: 'Average Billing Rate',
      icon: (
        <StyledIcon
          icon={DollarSign}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average amount you charge per billable hour. Helps you evaluate and adjust your pricing strategy.',
    },
    revenuePerHour: {
      title: 'Revenue per Hour',
      icon: (
        <StyledIcon
          icon={Timer}
          className={MetricClass}
        />
      ),
      format: 'currency',
      description:
        'The average amount of money your business earns for each hour of work. Assists in assessing productivity and efficiency.',
    },
  };

  // 指标分组
export const metricsDataGroups: Record<string, MetricGroup> = {
    keyMetrics: {
      title: 'Key Metrics',
      metrics: pickKeys(metricsDataConfigs,[
        'averageMonthlyProfit',
        'profitMargin',
        'operatingEfficiency',
        'utilizationRate',
        'profitPerProject',
        'revenueGrowthRate',
      ]),
    },
    financial: {
      title: 'Financial Metrics',
      metrics: pickKeys(metricsDataConfigs,[
        'averageMonthlyRevenue',
        'averageMonthlyProfit',
        'profitMargin',
        'accountsReceivable',
        'averageMonthlyExpenses',
        'operatingEfficiency',
        'revenueGrowthRate',
      ]),
    },
    time: {
      title: 'Time Metrics',
      metrics: pickKeys(metricsDataConfigs,[
        'averageMonthlyHoursWorked',
        'totalHoursWorked',
        'totalBillableHours',
        'utilizationRate',
        'averageProjectDuration',
      ]),
    },
    project: {
      title: 'Project Metrics',
      metrics: pickKeys(metricsDataConfigs,[
        'activeProjectCount',
        'completedProjectCount',
        'averageProjectDuration',
        'revenuePerProject',
        'profitPerProject',
        'projectGrowthRate',
      ]),
    },
    allReports: {
      title: 'All Reports',
      metrics: metricsDataConfigs
    },
    businessHealth: {
      title: 'Business Health Score',
      metrics: pickKeys(metricsDataConfigs, [
        'averageMonthlyRevenue',
        'profitMargin',
        'operatingEfficiency',
        'utilizationRate',
        'profitPerProject',
      ]),
    }
  } as const;
  