import { ReactNode } from 'react';



export interface MetricConfig {
  title: string;
  icon: ReactNode;
  format: 'currency' | 'percentage' | 'hours' | 'number';
  description: string;
}

export interface MetricGroup {
  title: string;
  metrics: Record<string, MetricConfig>;
}

export type MetricFormat = MetricConfig['format']; 