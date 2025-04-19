import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Flex } from "@/shared/ui/Flex";
import { QuizProgressSkeleton, withNavSkeleton } from "@/widgets/quiz";
import { QuestionSliderSkeleton } from "@/widgets/quiz/ui/QuestionSlider/QuestionSlider.skeleton";

const QuizQuestionsSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap={isMobileS ? "16" : isMobile ? "20" : "24"}>
      <QuizProgressSkeleton />
      <QuestionSliderSkeleton />
    </Flex>
  );
};

export const QuizQuestionsPageSkeleton = withNavSkeleton(QuizQuestionsSkeleton);
