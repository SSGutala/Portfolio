"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id: string;
}

const AnimatedSection = ({ children, id, className, ...props }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'min-h-[90vh] py-20 md:py-32 transition-all duration-700 ease-out',
        'opacity-0 transform translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
