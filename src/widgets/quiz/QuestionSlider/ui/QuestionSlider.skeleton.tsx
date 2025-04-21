import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { CurrentQuestionSkeleton } from "./CurrentQuestion/CurrentQuestion.skeleton";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { SwitchQuestionSkeleton } from "@/features/quiz/SwitchQuestion";
import { CompleteQuizButtonSkeleton } from "@/features/quiz/CompleteQuizButton";

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
