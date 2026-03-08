import { useEffect, useRef } from 'react';

type AdSize = '728x90' | '468x60' | '160x600' | '160x300';

interface AdBannerProps {
  size: AdSize;
  className?: string;
}

const adConfig: Record<AdSize, { key: string; width: number; height: number }> = {
  '728x90': { key: 'fa22f807f12e429661e667d0058bee84', width: 728, height: 90 },
  '468x60': { key: '5d1597a4441cca1db1deab2c8065ca9d', width: 468, height: 60 },
  '160x600': { key: 'd819e122b8e7309fb1ace9cb95a34086', width: 160, height: 600 },
  '160x300': { key: 'ecaa0a543c4580e64510824c64d09222', width: 160, height: 300 },
};

export const AdBanner = ({ size, className = '' }: AdBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = adConfig[size];

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing content
    containerRef.current.innerHTML = '';
    
    // Create and inject the ad script
    const atOptionsScript = document.createElement('script');
    atOptionsScript.innerHTML = `
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    `;
    
    const invokeScript = document.createElement('script');
    invokeScript.src = `https://maddenwiped.com/${config.key}/invoke.js`;
    invokeScript.async = true;
    
    containerRef.current.appendChild(atOptionsScript);
    containerRef.current.appendChild(invokeScript);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [config.key, config.width, config.height]);

  return (
    <div 
      className={`flex justify-center items-center overflow-hidden ${className}`}
      style={{ minHeight: config.height, minWidth: config.width }}
    >
      <div 
        ref={containerRef}
        style={{ width: config.width, height: config.height }}
        className="flex justify-center items-center bg-muted/20 rounded"
      />
    </div>
  );
};
