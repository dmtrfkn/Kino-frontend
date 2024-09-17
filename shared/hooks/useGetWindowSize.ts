import { useEffect, useState } from 'react';

interface WindowSize {
  width?: number;
  height?: number;
}

export const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const resizeHandler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', resizeHandler);

      resizeHandler();

      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return windowSize;
};
