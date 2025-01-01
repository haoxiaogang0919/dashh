"use client";

import { SIDEBAR_BUTTON_MENU } from "@/config/features/navigation/menu";
import { cn } from "@/lib/utils";
import SideItem from "./SideItem";
import { usePaths } from "@/hooks/user-nav";

interface RightSidebarProps {
  children?: React.ReactNode;
  className?: string;
}

const RightSidebar = ({ children, className }: RightSidebarProps) => {
  const { page } = usePaths();

  return (
    <aside 
      className={cn(
        "flex flex-col px-3 py-4 rounded-2xl z-20",
        "transition-all duration-300 ease-in-out backdrop-blur-sm",
        className
      )}
    >
      {/* 操作按钮区域 */}
      <nav className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center mb-1">
          Actions
        </h2>
        {SIDEBAR_BUTTON_MENU.map((item) => (
          <SideItem 
            key={item.name}
            item={item} 
            isActive={page === item.label}
            isButton
          />
        ))}
      </nav>

      {/* 分隔线和额外内容 */}
      {children && (
        <div className="flex flex-col gap-4 mt-6">
          <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />
          {children}
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;
