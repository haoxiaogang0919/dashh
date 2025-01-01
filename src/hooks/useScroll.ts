import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'horizontal' | 'vertical' | 'both';

interface UseScrollOptions {
  value?: {
    x?: number;
    y?: number;
  };
  enabled?: boolean;
  direction?: ScrollDirection;
}

export const useScroll = (options: UseScrollOptions = {}) => {
  const {
    value = { x: 0, y: 0 },
    enabled = true,
    direction = 'both'
  } = options;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState({
    x: 0,
    y: 0,
    percentage: 0
  });

  useEffect(() => {
    if (!scrollContainerRef.current || !enabled) return;

    const container = scrollContainerRef.current;
    const handleScroll = () => {
      const { 
        scrollLeft, 
        scrollTop, 
        scrollWidth, 
        scrollHeight,
        clientWidth,
        clientHeight 
      } = container;

      // 计算滚动进度
      const maxScrollX = scrollWidth - clientWidth;
      const maxScrollY = scrollHeight - clientHeight;
      
      const progressX = maxScrollX ? (scrollLeft / maxScrollX) * 100 : 0;
      const progressY = maxScrollY ? (scrollTop / maxScrollY) * 100 : 0;
      
      setScrollProgress({
        x: progressX,
        y: progressY,
        percentage: direction === 'horizontal' ? progressX : 
                   direction === 'vertical' ? progressY :
                   Math.max(progressX, progressY)
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [enabled, direction]);

  useEffect(() => {
    if (!scrollContainerRef.current || !enabled) return;
    
    scrollContainerRef.current.scrollTo({
      left: value.x,
      top: value.y,
      behavior: 'auto'
    });
  }, [value.x, value.y, enabled]);

  return {
    scrollContainerRef,
    scrollProgress
  };
}; 