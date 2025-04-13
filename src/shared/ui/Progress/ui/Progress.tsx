import { Flex } from "../../Flex";
import { Text } from "../../Text";
import styles from "./Progress.module.css";

interface ProgressProps {
  title?: string;
  total: number;
  current: number;
}

export const Progress = ({ title, total, current }: ProgressProps) => {
  return (
    <div>
      <Flex align="center">
        {title && <Text variant="body5-accent">{title}</Text>}
        <span className={styles.count}>{`${current}/${total}`}</span>
      </Flex>
      <progress className={styles.progress} value={current} max={total} />
    </div>
  );
};
