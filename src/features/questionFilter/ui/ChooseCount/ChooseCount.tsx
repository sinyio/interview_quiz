import { Counter } from "@/shared/ui/Counter";
import { useFilterHandlers } from "../../model/hooks/useFilterHandlers";
import { useFilter } from "../../model/hooks/useFilter";
import styles from "./ChooseCount.module.css";

export const ChooseCount = () => {
  const { filter } = useFilter();
  const { onChangeCount } = useFilterHandlers();

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
