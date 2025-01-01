'use client';

import Tabs from '@/components/common/Tabs';
import MetricsGrid from '@/components/features/dashboard/metrics/MetricsGrid';
import SectionTitle from '@/components/common/SectionTitle';

import { metricsDataGroups } from '@/config/features/metrics/config';

import {
  ChartNoAxesColumn,
  DollarSign,
  Clock,
  Briefcase,
  LayoutGrid,
  LifeBuoy,
} from 'lucide-react';

interface TabConfig {
  label: string;
  icon: React.ReactNode;
  group: keyof typeof metricsDataGroups;
}

// 定义基础 tab 配置
const tabConfigs: TabConfig[] = [
  {
    label: 'Key Metrics',
    icon: <ChartNoAxesColumn width={16} height={16} />,
    group: 'keyMetrics'
  },
  {
    label: 'Financial',
    icon: <DollarSign width={16} height={16} />,
    group: 'financial'
  },
  {
    label: 'Time',
    icon: <Clock width={16} height={16} />,
    group: 'time'
  },
  {
    label: 'Project',
    icon: <Briefcase width={16} height={16} />,
    group: 'project'
  },
  {
    label: 'All Reports',
    icon: <LayoutGrid width={16} height={16} />,
    group: 'allReports'
  },
  {
    label: 'Business Health Score',
    icon: <LifeBuoy width={16} height={16} />,
    group: 'businessHealth'
  }
];

// 生成最终的 tabs 配置
const tabs = tabConfigs.map(({ label, icon, group }) => ({
  label,
  icon,
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(metricsDataGroups[group].metrics).map(([key, metric]) => (
        <MetricsGrid 
          key={key} 
          {...metric} 
        />
      ))}
    </div>
  )
}));

const ReportPage = () => {
  return (
    <div className='space-y-6'>
      <SectionTitle title='Reports & KPIs' icon='LayoutGrid' />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ReportPage;
