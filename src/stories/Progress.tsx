import { Progress as ProgressBar } from 'radix-ui';
import styles from './Progress.module.css';

export interface ProgressProps {
  /** The current progress value (0 to 100) */
  value: number;
  /** What background color to use */
  backgroundColor?: string;
  /** What filled color to use */
  fillColor?: string;
  /** How large should the progress bar be? */
  size?: 'small' | 'medium' | 'large';
  /** Label contents */
  label?: string;
}

/** Primary UI component for communicating progress of tasks */
export const Progress = ({
  value,
  size = 'medium',
  backgroundColor,
  fillColor,
  label,
  ...props
}: ProgressProps) => {
  return (
    <div className={styles.container}>
      <ProgressBar.Root {...props}>
        <ProgressBar.Indicator />
      </ProgressBar.Root>
    </div>
  );
};
