import { Flex } from "@/shared/ui/Flex";
import { Navigate, useLocation } from "react-router-dom";
import { useGetQuizQuery } from "@/entities/quiz";
import { QuizPageSkeleton } from "./QuizPage.skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { ROUTES } from "@/shared/config/router/routes";
import { QuizProgress } from "@/widgets/quiz/QuizProgress";
import { QuestionSlider } from "@/widgets/quiz/QuestionSlider";

export const QuizPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const location = useLocation();

  const { isLoading } = useGetQuizQuery(location.state);

  if (!location.state) return <Navigate to={ROUTES.quiz.create} replace />;
  if (isLoading) return <QuizPageSkeleton />;

  return (
    <Flex direction="column" gap={isMobileS ? "16" : isMobile ? "20" : "24"}>
      <QuizProgress />
      <QuestionSlider />
    </Flex>
  );
};

export default QuizPage;
