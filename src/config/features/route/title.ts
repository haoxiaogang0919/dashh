
// 路由标题配置的类型
export interface RouteTitle {
  title: string;
  icon: string;
}

// 路由标题配置对象的类型
export type RouteTitles = Record<string, RouteTitle>;

// 配置(tabsLayout)下标题和右侧按钮图标
export const ROUTES_TITLE: RouteTitles = {
  reports: {
    title: 'Reports & KPIs',
    icon: 'LayoutGrid',
  },
  projects: {
    title: 'Projects',
    icon: 'LayoutGrid',
  },
  finance: {
    title: 'Financial',
    icon: 'LayoutGrid',
  },
  time: {
    title: 'Time Tracking',
    icon: 'Calendar',
  },
} as const;