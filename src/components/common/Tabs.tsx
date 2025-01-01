'use client';

import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';
interface Tab {
  label: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  onChange?: (index: number) => void;
  className?: string;
}

const tabBaseStyles =
  'relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors';
const tabActiveStyles =
  'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400';
const tabInactiveStyles =
  'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400';

const Tabs = ({ tabs, defaultTab = 0, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<Map<number, HTMLButtonElement>>(new Map());

  const updateIndicator = (index: number) => {
    const tab = tabsRef.current.get(index);
    if (tab) {
      setIndicatorStyle({
        left: `${tab.offsetLeft}px`,
        width: `${tab.offsetWidth}px`,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChange?.(index);
  };



  return (
    <div className="w-full">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="relative flex min-w-max gap-2 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => {
                if (el) {
                  tabsRef.current.set(index, el);
                } else {
                  tabsRef.current.delete(index);
                }
              }}
              onClick={() => handleTabClick(index)}
              className={cn(
                tabBaseStyles,
                activeTab === index ? tabActiveStyles : tabInactiveStyles
              )}
            >
              {tab.icon }
              {tab.label}
            </button>
          ))}
          <div
            className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
            style={indicatorStyle}
          />
        </div>
      </div>

      <div className="mt-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
