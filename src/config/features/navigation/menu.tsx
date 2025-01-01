import React from 'react';
import { LinkProps, ButtonProps } from '@/types/components/menu';
import { GRADIENTS } from '@/constants/gradients';
import {
  LayoutDashboard,
  ChartNoAxesColumn,
  FolderKanban,
  DollarSign,
  Clock,
  FolderPlus,
  Receipt,
  CalendarClock,
  Settings,
} from "lucide-react";

// 颜色主题配置

export const SIDEBAR_LINK_MENU: LinkProps[] = [
  {
    name: "Dashboard",
    path: "",
    icon: <LayoutDashboard />,
  },
  {
    name: "Reports",
    path: "reports",
    icon: <ChartNoAxesColumn />,
  },
  {
    name: "Projects",
    path: "projects",
    icon: <FolderKanban />,
  },
  {
    name: "Finance",
    path: "finance",
    icon: <DollarSign />,
  },
  {
    name: "Time",
    path: "time",
    icon: <Clock />,
  },
];

// 其他导航菜单
export const SIDEBAR_LINK_MENU_OTHER: LinkProps[] = [
  {
    name: "Settings",
    path: "settings",
    icon: <Settings />,
  },
];

// 快捷操作按钮
export const SIDEBAR_BUTTON_MENU: ButtonProps[] = [
  {
    name: "Project",
    label: "projects",
    text: "Add Project",
    className: GRADIENTS.blue,
    icon: <FolderPlus />,
  },
  {
    name: "Revenue",
    text: "Add Revenue",
    label: "finance",
    className: GRADIENTS.green,
    icon: <DollarSign />,
  },
  {
    name: "Expense",
    text: "Add Expense",
    label: "finance",
    className: GRADIENTS.red,
    icon: <Receipt />,
  },
  {
    name: "Time",
    text: "Log Time",
    label: "time",
    className: GRADIENTS.orange,
    icon: <CalendarClock />,
  },
];

