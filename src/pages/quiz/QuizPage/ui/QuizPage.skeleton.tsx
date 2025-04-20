import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Flex } from "@/shared/ui/Flex";
import {
  QuestionSliderSkeleton,
  QuizProgressSkeleton,
  withNavSkeleton,
} from "@/widgets/quiz";

const QuizSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap={isMobileS ? "16" : isMobile ? "20" : "24"}>
      <QuizProgressSkeleton />
      <QuestionSliderSkeleton />
    </Flex>
  );
};

export const QuizPageSkeleton = withNavSkeleton(QuizSkeleton);
