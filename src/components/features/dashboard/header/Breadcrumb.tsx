'use client';

import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from 'lucide-react';
import { usePaths } from '@/hooks/user-nav';
import { cn } from '@/lib/utils';

interface BreadcrumbItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const BreadcrumbItem = ({ href, label, isActive }: BreadcrumbItemProps) => (
  <div className="flex items-center gap-2">
    <ChevronRightIcon className="h-5 w-5" />
    {isActive ? (
      <span className="font-medium capitalize tracking-tight text-gray-900 dark:text-white">
        {label}
      </span>
    ) : (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1",
          "capitalize tracking-tight",
          "hover:text-gray-900 transition-colors"
        )}
      >
        <span>{label}</span>
      </Link>
    )}
  </div>
);

const Breadcrumb = () => {
  const { page, path } = usePaths();
  const history = path.slice(1, path.length - 1);

  return (
    <nav 
      className={cn(
        "absolute left-1/2 top-1/2",
        "flex -translate-x-1/2 -translate-y-1/2",
        "items-center gap-2 tracking-tight"
      )}
      aria-label="Breadcrumb"
    >
      {/* Home Link */}
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1",
          "capitalize hover:text-gray-900",
          "transition-colors"
        )}
      >
        <HomeIcon className="h-4 w-4" />
        <span>Home</span>
      </Link>

      {/* History Items */}
      {history.map((item, index) => (
        <BreadcrumbItem
          key={item + index}
          href={`/${item}`}
          label={item}
        />
      ))}

      {/* Current Page */}
      <BreadcrumbItem
        href="#"
        label={page}
        isActive
      />
    </nav>
  );
};

export default Breadcrumb;
