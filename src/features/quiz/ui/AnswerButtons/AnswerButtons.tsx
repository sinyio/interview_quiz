import { Flex } from "@/shared/ui/Flex";
import styles from "./AnswerButtons.module.css";
import { ThumbsDowm } from "@/shared/ui/Icons/ThumbsDowm";
import { ThumbsUp } from "@/shared/ui/Icons/ThumbsUp";

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
      <button
        className={`${styles.button} ${isLearned === false && styles.active}`}
        onClick={handleIsNotLearned}
      >
        <ThumbsDowm />
        Не знаю
      </button>
      <button
        className={`${styles.button} ${isLearned && styles.active}`}
        onClick={handleIsLearned}
      >
        <ThumbsUp />
        Знаю
      </button>
    </Flex>
  );
};
