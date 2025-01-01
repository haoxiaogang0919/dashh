import { cn } from "@/lib/utils";
import type { TimeRangeSelectorProps } from "@/types/components/common";

const TimeRangeSelector = ({
  options,
  value,
  onChange,
  className
}: TimeRangeSelectorProps) => {
  return (
    <div className={cn("h-9 items-center justify-center rounded-full bg-gray-100/50 dark:bg-gray-800/50 p-1 text-muted-foreground grid w-[200px] grid-cols-2", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "text-blue-500 rounded-full px-3 py-1 text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            value === option.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-background/50"
          )}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector; 