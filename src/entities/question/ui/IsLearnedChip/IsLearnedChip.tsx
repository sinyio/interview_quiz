import { Flex } from "@/shared/ui/Flex";
import { ThumbsDown } from "@/shared/ui/Icons/ThumbsDown";
import { ThumbsUp } from "@/shared/ui/Icons/ThumbsUp";
import styles from "./IsLearnedChip.module.css";

interface IsLearnedChipProps {
  learned?: boolean;
  active?: boolean;
  showLabel?: boolean;
}

export const IsLearnedChip = ({
  learned = false,
  active = false,
  showLabel = true,
}: IsLearnedChipProps) => {
  return (
    <Flex
      gap="8"
      align="center"
      className={`${styles.wrapper} ${active && styles.active}`}
    >
      {learned ? (
        <>
          <ThumbsUp />
          {showLabel && <span>Знаю</span>}
        </>
      ) : (
        <>
          <ThumbsDown />
          {showLabel && <span>Не знаю</span>}
        </>
      )}
    </Flex>
  );
};
