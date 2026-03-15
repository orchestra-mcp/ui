import type { ReactNode } from 'react';
import './TabRail.css';

export interface TabRailItem {
  /** Unique tab identifier */
  id: string;
  /** Tab display label */
  label: string;
  /** Tab icon element */
  icon: ReactNode;
}

export interface TabRailProps {
  /** Tab items to render */
  items: TabRailItem[];
  /** Currently active tab id */
  activeId: string;
  /** Called when a tab is selected */
  onSelect: (id: string) => void;
  /** Show icons only (collapsed sidebar mode) */
  collapsed?: boolean;
}

export const TabRail = ({
  items,
  activeId,
  onSelect,
  collapsed = false,
}: TabRailProps) => {
  const classes = [
    'tab-rail',
    collapsed ? 'tab-rail--collapsed' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} role="tablist" aria-orientation="vertical">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const itemClasses = [
          'tab-rail__item',
          isActive ? 'tab-rail__item--active' : '',
        ].filter(Boolean).join(' ');

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={itemClasses}
            aria-selected={isActive}
            aria-label={collapsed ? item.label : undefined}
            onClick={() => onSelect(item.id)}
          >
            <span className="tab-rail__icon">{item.icon}</span>
            {!collapsed && (
              <span className="tab-rail__label">{item.label}</span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
