import { ReactNode } from 'react';

// 类型定义
export interface BaseMenuProps {
  name: string;
  icon: ReactNode;
  text?: string;
  className?: string;
}

export interface LinkProps extends BaseMenuProps {
  path: string;
}

export interface ButtonProps extends BaseMenuProps {
  onClick?: () => void;
  label?: string;
} 