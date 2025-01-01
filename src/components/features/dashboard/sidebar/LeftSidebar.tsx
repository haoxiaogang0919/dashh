"use client";

import { SIDEBAR_LINK_MENU, SIDEBAR_LINK_MENU_OTHER } from "@/config/features/navigation/menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SideItem from "./SideItem";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar = ({ className }: LeftSidebarProps) => {
  const basePath = "/dashboard";
  const pathname = usePathname();

  // 生成完整路径并检查是否激活
  const getItemProps = (path: string) => {
    const fullPath = `${basePath}${path ? "/" : ""}${path}`;
    return {
      fullPath,
      isActive: pathname === fullPath
    };
  };

  return (
    <aside 
      className={cn(
        "flex flex-col px-3 py-4 rounded-2xl z-20",
        "transition-all duration-300 ease-in-out backdrop-blur-sm",
        className
      )}
    >
      {/* 主导航菜单 */}
      <nav className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center mb-1">
          Menu
        </h2>
        {SIDEBAR_LINK_MENU.map((item) => {
          const { fullPath, isActive } = getItemProps(item.path);
          return (
            <SideItem
              key={item.name}
              item={item}
              isActive={isActive}
              fullPath={fullPath}
            />
          );
        })}
      </nav>

      {/* 其他导航菜单 */}
      <nav className="flex flex-col gap-4 mt-6">
        <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />
        {SIDEBAR_LINK_MENU_OTHER.map((item) => {
          const { fullPath, isActive } = getItemProps(item.path);
          return (
            <SideItem
              key={item.name}
              item={item}
              isActive={isActive}
              fullPath={fullPath}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
