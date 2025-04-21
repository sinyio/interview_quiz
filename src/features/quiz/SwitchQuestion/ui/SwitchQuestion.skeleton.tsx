import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";

export const SwitchQuestionSkeleton = () => {
  return (
    <Flex justify="between">
      <Skeleton width={70} height={22} />
      <Skeleton width={70} height={22} />
    </Flex>
  );
};
