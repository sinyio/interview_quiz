import { Counter } from "@/shared/ui/Counter";
import styles from "./ChooseCount.module.css";

interface ChooseCountProps {
  onChange: (count: number) => void;
  count: number;
}

export const ChooseCount = ({ count, onChange }: ChooseCountProps) => {
  return (
    <div>
      <h3 className={styles.title}>Количество вопросов</h3>
      <Counter count={count} onChange={onChange} />
    </div>
  );
};
