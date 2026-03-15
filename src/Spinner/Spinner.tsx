import './Spinner.css';

export interface SpinnerProps {
  /** Spinner diameter in pixels */
  size?: number;
  /** Stroke color (defaults to currentColor) */
  color?: string;
}

export const Spinner = ({
  size = 16,
  color = 'currentColor',
}: SpinnerProps) => {
  return (
    <svg
      className="spinner"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      role="status"
      aria-label="Loading"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="28"
        strokeDashoffset="8"
        strokeLinecap="round"
      />
    </svg>
  );
};
