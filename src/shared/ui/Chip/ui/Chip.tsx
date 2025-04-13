import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const Chip = ({ label, icon, isActive = false, onClick }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.chip, { [styles.active]: isActive })}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <p>{label}</p>
    </div>
  );
};
