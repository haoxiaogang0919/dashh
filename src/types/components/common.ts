import { ReactNode } from 'react';

export interface CardHeaderProps {
  title: string;
  href: string;
}

export interface TimeRangeOption {
  value: number;
  label: string;
  icon?: ReactNode;
  className?: string;
} 


export interface TimeRangeSelectorProps {
  options: TimeRangeOption[];
  value: number;
  onChange: (value: number) => void;
  className?: string;
}