import { ReactNode } from 'react';

// 使用 type：因为是联合类型
export type DatasetKeyType = 'profit' | 'revenue' | 'expenses' | 'time';

// 使用 interface：因为是对象结构，且可能被扩展
export interface KpiToggleProps {
  name: string;
  icon: ReactNode;
  active: boolean;
  activeColor: string;
  value: number;
  datasetKey: DatasetKeyType;
} 