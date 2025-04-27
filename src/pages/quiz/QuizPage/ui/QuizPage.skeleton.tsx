import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '@/shared/ui/Flex';
import { QuestionSliderSkeleton } from '@/widgets/quiz/QuestionSlider';
import { withNavSkeleton } from '@/widgets/quiz/QuizNavigation';
import { QuizProgressSkeleton } from '@/widgets/quiz/QuizProgress';

const QuizSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap={isMobileS ? '16' : isMobile ? '20' : '24'}>
      <QuizProgressSkeleton />
      <QuestionSliderSkeleton />
    </Flex>
  );
};

export const QuizPageSkeleton = withNavSkeleton(QuizSkeleton);
