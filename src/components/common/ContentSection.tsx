'use client';


import { cn } from '@/lib/utils';


interface ContentSectionProps {
  title: string;
  rightContent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({
  title,
  rightContent,
  children,
  className
}: ContentSectionProps) => {
  return (
    <section className={cn("bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6", className)}>
      <div className="flex items-center justify-between pb-4">
        <h3 className="tracking-tight text-gray-900 dark:text-gray-100 text-base font-medium">{title}</h3>
        {rightContent}
      </div>
      {children}
    </section>
  );
};

export default ContentSection; 