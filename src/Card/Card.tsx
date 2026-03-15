import type { ReactNode, CSSProperties } from 'react';
import './Card.css';

export interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Inner padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  className,
  style,
  padding = 'md',
}: CardProps) => {
  const classes = [
    'card',
    `card--pad-${padding}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
