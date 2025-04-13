import { Minus } from "@/shared/ui/Icons/Minus";
import { Plus } from "@/shared/ui/Icons/Plus";
import styles from "./Counter.module.css";

interface CounterProps {
  count: number;
  onChange: (count: number) => void;
  maxCount?: number;
}

export const Counter = ({ count, onChange, maxCount = 100 }: CounterProps) => {
  const handleIncrement = () => {
    onChange(count === maxCount ? maxCount : count + 1);
  };

  const handleDecrement = () => {
    onChange(count === 1 ? 1 : count - 1);
  };

  return (
    <div className={styles.counter}>
      <Minus onClick={handleDecrement} />
      <div className={styles.count}>{count}</div>
      <Plus onClick={handleIncrement} />
    </div>
  );
};
