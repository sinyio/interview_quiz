import { Counter } from "@/shared/ui/Counter";
import { useFilter } from "../../model/hooks/useFilter";
import styles from "./ChooseCount.module.css";

export const ChooseCount = () => {
  const { filter, updateFilter } = useFilter();
  const onChangeCount = (count: number) => {
    updateFilter({ ...filter, count: count });
  };

  return (
    <div>
      <h3 className={styles.title}>Количество вопросов</h3>
      <Counter
        count={filter.count}
        onChange={onChangeCount}
        className={styles.counter}
      />
    </div>
  );
};
