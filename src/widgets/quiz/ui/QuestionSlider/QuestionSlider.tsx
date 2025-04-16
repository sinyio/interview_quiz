import { completeQuiz } from "@/entities/quiz";
import { CompleteQuizButton, SwitchQuestion } from "@/features/quiz";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Separator } from "@/shared/ui/Separator";
import { useNavigate } from "react-router-dom";
import { CurrentQuestion } from "./CurrentQuestion/CurrentQuestion";

export const QuestionSlider = () => {
  const questions = useAppSelector((state) => state.quiz.questions);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCompleteQuiz = () => {
    dispatch(completeQuiz());
    navigate("/quiz-result");
  };

  return (
    <Card>
      <Flex direction="column" gap="24">
        <SwitchQuestion />
        <CurrentQuestion question={questions[currentQuestion - 1]} />
        <Separator />
        <CompleteQuizButton onClick={onCompleteQuiz} />
      </Flex>
    </Card>
  );
};
