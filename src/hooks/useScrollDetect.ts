import { useState, useEffect } from 'react';

interface UseScrollDetectOptions {
  threshold?: number;
}

export const useScrollDetect = (options: UseScrollDetectOptions = {}) => {
  const { threshold = 0 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}; 