import { Flex } from "@/shared/ui/Flex";
import { Navigate, useLocation } from "react-router-dom";
import { QuestionSlider, QuizProgress } from "@/widgets/quiz";

export const QuizQuestionsPage = () => {
  const location = useLocation();
  if (!location.state) return <Navigate to="/" replace />;

  return (
    <Flex direction="column" gap="24">
      <QuizProgress />
      <QuestionSlider />
    </Flex>
  );
};

export default QuizQuestionsPage;
