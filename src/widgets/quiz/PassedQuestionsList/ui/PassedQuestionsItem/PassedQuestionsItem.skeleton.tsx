import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import styles from "./PassedQuestionsItem.module.css";

export const PassedQuestionsItemSkeleton = () => {
  return (
    <Flex gap="20">
      <Skeleton className={styles.image} />
      <Flex gap="8" direction="column" flex={1}>
        <Flex direction="column" gap="4">
          <Skeleton height={16} />
          <Skeleton height={16} width="80%" />
        </Flex>
        <Skeleton height={44} maxWidth={120} />
      </Flex>
    </Flex>
  );
};
