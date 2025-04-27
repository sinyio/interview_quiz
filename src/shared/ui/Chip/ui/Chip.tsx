import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Chip.module.css';

interface ChipProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  outline?: boolean;
  onClick?: () => void;
}

export const Chip = ({
  label,
  icon,
  isActive = false,
  outline = true,
  onClick,
  ...props
}: ChipProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.chip, {
        [styles.active]: isActive,
        [styles.outline]: outline,
      })}
      {...props}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <p>{label}</p>
    </div>
  );
};
