import { useEffect, useRef } from 'react';

interface NativeBannerProps {
  className?: string;
}

export const NativeBanner = ({ className = '' }: NativeBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.getElementById('container-19c6e2c98905a2ebcae007bf0401b711');
    if (existing && existing !== containerRef.current.querySelector('#container-19c6e2c98905a2ebcae007bf0401b711')) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://maddenwiped.com/19c6e2c98905a2ebcae007bf0401b711/invoke.js';

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`adsterra-slot adsterra-native flex justify-center items-center ${className}`}
      data-ad-network="adsterra"
    >
      <div id="container-19c6e2c98905a2ebcae007bf0401b711"></div>
    </div>
  );
};
