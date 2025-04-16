import { Flex } from "@/shared/ui/Flex";
import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";
import { IsLearnedChip } from "@/entities/quiz";
import styles from "./PassedQuestionsItem.module.css";

interface PassedQuestionsItemProps {
  imageSrc: string;
  title: string;
  isLearned?: boolean;
}

export const PassedQuestionsItem = ({
  imageSrc,
  title,
  isLearned,
}: PassedQuestionsItemProps) => {
  return (
    <Flex gap="20">
      <Image imageSrc={imageSrc} alt={title} className={styles.image} />
      <Flex gap="8" direction="column">
        <Text variant="body4" color="black-800" className={styles.title}>
          {title}
        </Text>
        {isLearned ? <IsLearnedChip learned active /> : <IsLearnedChip />}
      </Flex>
    </Flex>
  );
};
