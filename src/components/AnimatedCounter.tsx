import { useEffect, useState, type CSSProperties } from 'react';
import { animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  style?: CSSProperties;
}

export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 2, 
  className = "", 
  style 
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.0,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(latest);
      }
    });
    return controls.stop;
  }, [value]);

  const formattedNumber = displayValue.toLocaleString('pt-BR', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  });
  
  return <span className={className} style={style}>{prefix}{formattedNumber}{suffix}</span>;
}
