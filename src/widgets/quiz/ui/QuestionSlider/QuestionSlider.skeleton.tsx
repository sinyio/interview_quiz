import { CompleteQuizButtonSkeleton, SwitchQuestionSkeleton } from "@/features/quiz";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { CurrentQuestionSkeleton } from "./CurrentQuestion/CurrentQuestion.skeleton";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

export const QuestionSliderSkeleton = () => {
  const { isMobileS } = useScreenSize();
  return (
    <Card>
      <Flex direction="column" gap={isMobileS ? "16" : "24"}>
        <SwitchQuestionSkeleton />
        <CurrentQuestionSkeleton />
        <Skeleton height={1} />
        <CompleteQuizButtonSkeleton />
      </Flex>
    </Card>
  );
};
