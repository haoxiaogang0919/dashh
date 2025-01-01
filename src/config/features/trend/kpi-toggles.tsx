
import { KpiToggleProps, DatasetKeyType } from '@/types/components/chart';
import { TrendingUp, DollarSign, FileText, Clock } from "lucide-react";
import {StyledIcon} from '@/components/ui/icons'

const KPI_CLASS = "w-5 h-5"

// KPI配置映射
const KPI_CONFIG = {
  profit: {
    name: "Profit",
    icon: <StyledIcon  icon={TrendingUp} className={KPI_CLASS} />,
    activeColor: "sky-500",
  },
  revenue: {
    name: "Revenue",
    icon: <StyledIcon icon={DollarSign} className={KPI_CLASS} />,
    activeColor: "green-500",
  },
  expenses: {
    name: "Expenses",
    icon: <StyledIcon icon={FileText} className={KPI_CLASS}/>,
    activeColor: "red-500",
  },
  time: {
    name: "Time",
    icon: <StyledIcon icon={Clock} className={KPI_CLASS}/>,
    activeColor: "purple-500",
  },
} as const;

// KPI切换按钮列表
export const KPI_TOGGLES: KpiToggleProps[] = Object.entries(KPI_CONFIG).map(
  ([key, config]) => ({
    ...config,
    active: key === 'profit', // 默认激活profit
    value: 0,
    datasetKey: key as DatasetKeyType,
  })
);
