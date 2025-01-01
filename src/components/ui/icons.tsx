
import { type LucideIcon } from 'lucide-react';

export interface StyledIconProps {
  icon: LucideIcon;
  className?: string;
}

export const StyledIcon = ({ icon: Icon, className }: StyledIconProps) => {
  return <Icon className={className} />;
};
