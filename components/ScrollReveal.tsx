import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  width?: "full" | "auto"; 
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0, width = "full" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out-expo transform ${width === "full" ? "w-full" : "w-auto"} ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-none' 
          : 'opacity-0 translate-y-16 blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;