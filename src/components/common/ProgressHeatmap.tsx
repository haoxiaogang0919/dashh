'use client'
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/useScroll';
interface Props {
  data: {
    date: string;
    value: number;
  }[];
  className?: string;
}

const MONTHS: Array<{ month: string; index: number }> = [
  { month: 'Jan', index: 0 },
  { month: 'Feb', index: 1 },
  { month: 'Mar', index: 2 },
  { month: 'Apr', index: 3 },
  { month: 'May', index: 4 },
  { month: 'Jun', index: 5 },
  { month: 'Jul', index: 6 },
  { month: 'Aug', index: 7 },
  { month: 'Sep', index: 8 },
  { month: 'Oct', index: 9 },
  { month: 'Nov', index: 10 },
  { month: 'Dec', index: 11 },
];

const ProgressHeatmap = ({ data, className }: Props) => {
  const calculateScrollValue = () => {
    const currentMonth = new Date().getMonth();
    const totalMonths = 11;
    return (currentMonth / totalMonths) * 1040;
  };

  const { scrollContainerRef } = useScroll({
    value: { x: calculateScrollValue() },
    enabled: true
  });

  // 计算月份起始列位置和跨度
  const getMonthStartColumn = (monthIndex: number) => {
    const quarterGaps = Math.floor(monthIndex / 3);
    return 1 + monthIndex * 4 + quarterGaps;
  };

  const getMonthSpan = (monthIndex: number) =>
    (monthIndex + 1) % 3 === 0 ? 5 : 4;

  // 组件
  const MonthLabels = () => (
    <div className="grid grid-cols-[repeat(52,_20px)] gap-1 mb-1">
      {MONTHS.map(({ month, index }) => (
        <div
          key={month}
          className="text-[10px] text-muted-foreground font-medium whitespace-nowrap pl-[2px]"
          style={{
            gridColumn: `${getMonthStartColumn(index)} / span ${getMonthSpan(index)}`,
          }}
        >
          {month}
        </div>
      ))}
    </div>
  );

  const WeekdayLabels = () => (
    <div className="grid grid-cols-[repeat(52,_20px)] gap-1">
      {Array.from({ length: 52 }).map((_, weekIndex) => (
        <div
          key={weekIndex}
          className="flex flex-col gap-1"
        >
          {Array.from({ length: 7 }).map((_, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={cn(
                `h-4 w-4 cursor-default rounded-[2px] bg-gray-200 transition-colors
                dark:bg-gray-700`
              )}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        'overflow-x-auto scrollbar-hide p-1 h-full scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent scroll-auto',
        className
      )}
    >
      <div className="h-full flex flex-col justify-end">
        <MonthLabels />
        <WeekdayLabels />
      </div>
    </div>
  );
};

export default ProgressHeatmap;
