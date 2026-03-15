import './StatusDot.css';

export interface StatusDotProps {
  /** Status state determining color and animation */
  status: 'running' | 'starting' | 'stopped' | 'error' | 'connected' | 'syncing';
  /** Dot diameter in pixels */
  size?: number;
}

export const StatusDot = ({
  status,
  size = 8,
}: StatusDotProps) => {
  const classes = [
    'status-dot',
    `status-dot--${status}`,
  ].join(' ');

  return (
    <span
      className={classes}
      style={{ width: size, height: size }}
      role="status"
      aria-label={status}
    />
  );
};
