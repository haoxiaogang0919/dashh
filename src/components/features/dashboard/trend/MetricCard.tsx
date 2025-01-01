import { KpiToggleProps } from "@/types/components/chart";
import { cn } from "@/lib/utils";

interface MetricCardProps extends KpiToggleProps {
  onToggle: () => void;
}

const MetricCard = ({ 
  name, 
  icon, 
  active, 
  activeColor, 
  value, 
  onToggle 
}: MetricCardProps) => (
  <button 
    onClick={onToggle}
    aria-label={`Toggle ${name} metric`}
    className={cn(
      "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl",
      "border border-transparent transition-all duration-300 ease-out hover:scale-[1.02]",
      active && `border-${activeColor}`
    )}
  >
    <div className={cn("p-2 rounded-xl", active && `text-${activeColor}`)}>
      {icon}
    </div>
    <div className={cn("text-left text-gray-500", active && "text-gray-900")}>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xl font-semibold">${value}</div>
    </div>
  </button>
);

export default MetricCard;