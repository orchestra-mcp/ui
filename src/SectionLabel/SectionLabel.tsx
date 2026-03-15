import type { ReactNode } from 'react';
import './SectionLabel.css';

export interface SectionLabelProps {
  /** Label text content */
  children: ReactNode;
}

export const SectionLabel = ({
  children,
}: SectionLabelProps) => {
  return (
    <div className="section-label">
      {children}
    </div>
  );
};
