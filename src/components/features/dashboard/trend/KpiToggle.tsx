import { FlameIcon, Clock, Activity } from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";

const KpiToggle = () => {
  return (
    <div className="px-6 py-5 flex flex-row gap-4 justify-between">
      <div className="space-y-1 flex flex-col items-center sm:items-start">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Good Afternoon, xiaogang
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Wednesday, December 25
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 p-2.5  w-full sm:w-auto bg-white dark:bg-gray-900 rounded-lg">
        <div
          className="
        flex items-center gap-2 
        bg-white dark:bg-gray-900
        px-3 py-1.5 rounded-full
        border border-gray-200 dark:border-gray-800
        hover:border-gray-300 dark:hover:border-gray-700
        transition-all
        hover:scale-105 duration-300 ease-out
      "
        >
          <FlameIcon className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Day Streak:
          </span>
          <span className="text-sm font-medium text-orange-500"> 1</span>
        </div>
        <div
          className="
        flex items-center gap-2 
        bg-white dark:bg-gray-900
        px-3 py-1.5 rounded-full
        border border-gray-200 dark:border-gray-800
        hover:border-gray-300 dark:hover:border-gray-700
        transition-all
        hover:scale-105 duration-300 ease-out
      "
        >
          <Clock className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Day Streak:
          </span>
          <span className="text-sm font-medium text-blue-500"> 0m</span>
        </div>
        <HoverCard.Root openDelay={0} closeDelay={0}>
          <HoverCard.Trigger asChild>
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:scale-105 duration-300 ease-out">
              <Activity className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Business Health:
              </span>
              <span className="text-xs italic text-muted-foreground">Missing targets</span>
            </button>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content side="left" align="center" sideOffset={5} className="HoverCardContent">
              <div className="px-5 py-1 bg-gray-900 rounded-xl shadow-md text-white text-xs leading-normal">
                  <span>View health score details</span>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </div>
  );
};

export default KpiToggle;
