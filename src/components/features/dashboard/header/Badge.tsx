'use client';

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { ACTION_BUTTONS } from "@/config/features/navigation/badge"
import type { ActionButtonProps } from "@/types/components/badge"



const ActionButton = ({ icon, label, onClick }: ActionButtonProps) => (
  <Button 
    variant={label ? "outline" : "ghost"}
    size={label ? "default" : "icon"}
    onClick={onClick}
    className={cn(
      "text-gray-900 font-medium",
      label && "rounded-xl bg-white/30",
      "[&_svg]:size-5"
    )}
  >
    {label ? (
      <span className="inline-flex items-center gap-2">
        {icon}
        <span className="hidden sm:inline text-sm">{label}</span>
      </span>
    ) : (
      icon
    )}
  </Button>
);

const Badge = () => {
  return (
    <nav className="inline-flex items-center gap-3" aria-label="Action buttons">
      {ACTION_BUTTONS.map<React.ReactNode>((button: ActionButtonProps, index) => (
        <ActionButton 
          key={button.label || `action-${index}`}
          {...button}
        />
      ))}
    </nav>
  );
};

export default Badge