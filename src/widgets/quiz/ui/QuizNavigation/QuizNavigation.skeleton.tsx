import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";

export const QuizNavigationSkeleton = () => {
  return (
    <Flex gap="32">
      <Skeleton width={62} height={22} />
      <Skeleton width={132} height={22} />
      <Skeleton width={100} height={22} />
    </Flex>
  );
};
