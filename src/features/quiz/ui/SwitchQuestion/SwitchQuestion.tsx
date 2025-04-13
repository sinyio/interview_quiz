import { setCurrentQuestion } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { ArrowButton } from "@/shared/ui/ArrowButton";
import { Flex } from "@/shared/ui/Flex";

export const SwitchQuestion = () => {
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const totalQuestions = useAppSelector((state) => state.quiz.totalQuestions);

  const dispatch = useAppDispatch();

  const handleNextQusetion = () => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  const handlePreviousQusetion = () => {
    dispatch(setCurrentQuestion(currentQuestion - 1));
  };

  return (
    <Flex justify="between">
      <ArrowButton
        variant="back"
        disabled={currentQuestion === 1}
        onClick={handlePreviousQusetion}
      />
      <ArrowButton
        variant="next"
        disabled={currentQuestion === totalQuestions}
        onClick={handleNextQusetion}
      />
    </Flex>
  );
};
