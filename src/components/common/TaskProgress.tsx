import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const progressVariants = cva('h-2 rounded-full transition-all', {
  variants: {
    variant: {
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      red: 'bg-red-500',
    },
  },
  defaultVariants: {
    variant: 'blue',
  },
});

interface ProgressProps extends VariantProps<typeof progressVariants> {
  value: number;
  className?: string;
}

const TaskProgress = ({value, variant, className}: ProgressProps) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-muted-foreground">aa</span>
        <span className="font-medium"> $1000</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className={cn(progressVariants({ variant }), "h-full rounded-ful")}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
export default TaskProgress;
