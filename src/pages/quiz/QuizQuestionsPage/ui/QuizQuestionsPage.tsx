import { Flex } from "@/shared/ui/Flex";
import { Navigate, useLocation } from "react-router-dom";
import { QuestionSlider, QuizProgress } from "@/widgets/quiz";
import { useGetQuizQuery } from "@/entities/quiz";
import { QuizQuestionsPageSkeleton } from "./QuizQuestionsPage.skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { ROUTES } from "@/shared/config/router/routes";

export const QuizQuestionsPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const location = useLocation();

  const { isLoading } = useGetQuizQuery(location.state);

  if (!location.state) return <Navigate to={ROUTES.quiz.create} replace />;
  if (isLoading) return <QuizQuestionsPageSkeleton />;

  return (
    <Flex direction="column" gap={isMobileS ? "16" : isMobile ? "20" : "24"}>
      <QuizProgress />
      <QuestionSlider />
    </Flex>
  );
};

export default QuizQuestionsPage;
