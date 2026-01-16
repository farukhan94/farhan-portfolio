import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Check for low-power mode or slow device
      const connection = (navigator as any).connection;
      if (connection) {
        setIsLowPower(
          connection.saveData || 
          connection.effectiveType === '2g' || 
          connection.effectiveType === 'slow-2g'
        );
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { 
    isMobile, 
    isLowPower, 
    shouldReduceMotion: isMobile || isLowPower 
  };
};
