import { Progress as ProgressBar } from 'radix-ui';
import styles from './Progress.module.css';

export interface ProgressProps {
  /** The current progress value (0 to 100) */
  value: number;
  /** How large should the progress bar be? */
  size?: 'small' | 'medium' | 'large';
  /** Label contents */
  label?: string;
}

/** Primary UI component for communicating progress of tasks */
export const Progress = ({
  value,
  size = 'medium',
  label,
  ...props
}: ProgressProps) => {
  return (
    <ProgressBar.Root {...props} className={styles.root}>
      <ProgressBar.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressBar.Root>
  );
};
