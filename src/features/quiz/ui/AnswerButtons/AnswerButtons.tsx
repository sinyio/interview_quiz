import { Flex } from "@/shared/ui/Flex";
import { IsLearnedChip } from "@/entities/quiz";
import styles from "./AnswerButtons.module.css";

interface AnswerButtonsProps {
  isLearned?: boolean;
  onChange: (isLearned: boolean) => void;
}

export const AnswerButtons = ({ isLearned, onChange }: AnswerButtonsProps) => {
  const handleIsLearned = () => {
    onChange(true);
  };

  const handleIsNotLearned = () => {
    onChange(false);
  };

  return (
    <Flex gap="8">
      <button className={styles.button} onClick={handleIsNotLearned}>
        <IsLearnedChip active={isLearned === false} />
      </button>
      <button className={styles.button} onClick={handleIsLearned}>
        <IsLearnedChip learned active={isLearned} />
      </button>
    </Flex>
  );
};
