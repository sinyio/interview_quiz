import { markQuestionAsLearned, QuizQuestion } from "@/entities/quiz";
import { Image } from "@/shared/ui/Image";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";
import { Dot } from "@/shared/ui/Icons/Dot";
import { AnswerButtons, ShowAnswer } from "@/features/quiz";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import mockQuestionImage from "@/shared/assets/images/mockQuestion.svg";
import styles from "./CurrentQuestion.module.css";

interface CurrentQuestionProps {
  question: QuizQuestion;
}

export const CurrentQuestion = ({ question }: CurrentQuestionProps) => {
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  const handleIsLearned = (isLearned: boolean) => {
    console.log(isLearned);
    dispatch(
      markQuestionAsLearned({ questionIndex: currentQuestion - 1, isLearned })
    );
  };

  return (
    <Flex gap="20" justify="between">
      <Flex direction="column" justify="between">
        <Flex gap="16" direction="column">
          <Flex gap="8">
            <Dot />
            <Text variant="body5-accent">{question.title}</Text>
          </Flex>
          <ShowAnswer answer={question.shortAnswer} />
        </Flex>
        <AnswerButtons
          onChange={handleIsLearned}
          isLearned={question.isLearned}
        />
      </Flex>
      <Image
        className={styles.image}
        imageSrc={question.imageSrc ?? mockQuestionImage}
        alt={question.title}
      />
    </Flex>
  );
};
