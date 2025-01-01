'use client';

import { cn } from '@/lib/utils';
import { useScrollDetect } from '@/hooks/useScrollDetect';
import MyLogo from './MyLogo';
import Breadcrumb from './Breadcrumb';
import Badge from './Badge';

const Header = () => {
  const isScrolled = useScrollDetect({ threshold: 20 });

  return (
    <div
      className={cn(
        // 基础样式
        'sticky z-20 top-0 w-full transition-all duration-200 md:px-4',

        // 滚动状态样式
        isScrolled ? [
          'bg-white/80 dark:bg-gray-900/80',
          'backdrop-blur-md',
          'shadow-sm',
          'md:rounded-2xl',
          'md:top-2'
        ] : [
          'bg-transparent',
          'border-b border-gray-200/50 dark:border-gray-800/50',
          'md:border-none'
        ]
      )}
    >
      <div className="mx-auto w-full px-3 py-3 sm:px-6">
        <div className="flex w-full flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <MyLogo />
          {/**路径目录 */}
          <Breadcrumb />
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Header;
