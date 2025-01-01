import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { ButtonProps, LinkProps } from "@/types/components/menu";
import { validateMenuItem } from "@/lib/validations/menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  item: ButtonProps | LinkProps;
  isActive: boolean;
  isButton?: boolean;
  fullPath?: string;
  onClick?: () => void;
};

const SideItem = ({ item, isActive, isButton, fullPath, onClick }: Props) => {
  try {
    // 验证 item 数据
    validateMenuItem(item, isButton ? 'button' : 'link');
  } catch (error) {
    console.error('Invalid menu item:', error);
    return null;
  }
  
  const commonClassNames = cn(
    "[&_svg]:size-5",
    "w-12 h-12 rounded-2xl",
    "flex items-center justify-center",
    "transition-all duration-300 ease-out",
    "hover:scale-110",
    isActive
      ? cn(
          "shadow-lg",
          isButton
            ? `bg-gradient-to-br ${item.className}`
            : "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700"
        )
      : "hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm"
  );

  const content = (
    <span className={cn(isActive && "text-white")}>
      {item.icon}
    </span>
  );

  return (
    <div className="flex flex-col items-center" key={item.name}>
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger asChild>
          {isButton ? (
            <Button
              variant="ghost"
              onClick={onClick}
              className={commonClassNames}
            >
              {content}
            </Button>
          ) : (
            <Link href={fullPath!} className={commonClassNames}>
              {content}
            </Link>
          )}
        </HoverCard.Trigger>
        <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">
          {item.name}
        </span>
        <HoverCard.Portal>
          <HoverCard.Content
            side={isButton ? "left" : "right"}
            sideOffset={5}
            align="center"
            avoidCollisions={false}
            className="HoverCardContent z-50"
          >
            <p className="px-2 py-1 rounded-xl text-xs text-white bg-black bg-opacity-90 ">
              <span>{item.text || item.name}</span>
            </p>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};

export default SideItem; 