import { Card } from "@/shared/ui/Card";
import { Progress } from "@/shared/ui/Progress";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Flex } from "@/shared/ui/Flex";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { SwitchQuestion } from "@/features/quiz";
import { Separator } from "@/shared/ui/Separator";
import { CurrentQuestion } from "./CurrentQuestion";
import { useGetQuizQuery } from "@/entities/quiz";
import styles from "./QuizQuestionsPage.module.css";

export const QuizQuestionsPage = () => {
  const questions = useAppSelector((state) => state.quiz.questions);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const totalQuestions = useAppSelector((state) => state.quiz.totalQuestions);

  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading } = useGetQuizQuery(location.state);

  if (!location.state) return <Navigate to={"/"} replace />;

  if (isLoading) return <div>Loading...</div>;

  const onCompleteQuiz = () => navigate("/quiz-result");

  return (
    <Flex direction="column" gap="24">
      <Card className={styles.progress}>
        <Progress
          title="Вопросы собеседования"
          current={currentQuestion}
          total={totalQuestions}
        />
      </Card>
      <Card>
        <Flex direction="column" gap="24">
          <SwitchQuestion />
          <CurrentQuestion question={questions[currentQuestion - 1]} />
          <Separator />
          <Button
            size="m"
            variant="destructive"
            className={styles.button}
            onClick={onCompleteQuiz}
          >
            Завершить
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default QuizQuestionsPage;
