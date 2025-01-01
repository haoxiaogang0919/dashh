import Link from 'next/link';
import type { CardHeaderProps } from '@/types/components/common';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
  
const CardHeader = ({ title, href }: CardHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between px-0 md:px-4 ">
      <h2 className="text-lg font-semibold ">{title}</h2>
        <Link
          href={href}
          className="text-sm font-medium transition-colors"
        >
          <Button
            variant="ghost"
        
            className="text-sm font-medium text-muted-foreground rounded-xl" 
          >
            <span className="text-sm font-medium text-muted-foreground">See more</span>
            <ArrowRightIcon
              width={16}
              height={16}
            />
          </Button>
        </Link>
    </div>
  );
};

export default CardHeader;
