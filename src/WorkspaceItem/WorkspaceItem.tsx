import type { ReactNode } from 'react';
import './WorkspaceItem.css';

export interface WorkspaceItemProps {
  /** Workspace display name */
  name: string;
  /** Whether this workspace is currently active */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Custom icon (defaults to folder icon) */
  icon?: ReactNode;
}

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 2.5A.75.75 0 0 0 1 3.25v9.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H7.44l-1.72-1.72a.75.75 0 0 0-.53-.22H1.75Z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
  </svg>
);

export const WorkspaceItem = ({
  name,
  active = false,
  onClick,
  icon,
}: WorkspaceItemProps) => {
  const classes = [
    'workspace-item',
    active ? 'workspace-item--active' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      <span className="workspace-item__icon">
        {icon || <FolderIcon />}
      </span>
      <span className="workspace-item__name">{name}</span>
      {active && (
        <span className="workspace-item__badge">
          <CheckIcon />
          <span>Active</span>
        </span>
      )}
    </button>
  );
};
