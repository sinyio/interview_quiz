import { markQuestionAsLearned, QuizQuestion } from "@/entities/quiz";
import { Image } from "@/shared/ui/Image";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { ShowAnswer } from "@/features/quiz/ShowAnswer";
import { AnswerButtons } from "@/features/quiz/AnswerButtons";
import mockQuestionImage from "@/shared/assets/images/mockQuestion.svg";
import styles from "./CurrentQuestion.module.css";

interface CurrentQuestionProps {
  question: QuizQuestion;
}

export const CurrentQuestion = ({ question }: CurrentQuestionProps) => {
  const { isMobile, isMobileS } = useScreenSize();

  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  const handleIsLearned = (isLearned: boolean) => {
    dispatch(
      markQuestionAsLearned({ questionIndex: currentQuestion - 1, isLearned })
    );
  };

  return (
    <Flex gap="20" justify="between" direction={isMobile ? "column" : "row"}>
      <Flex direction="column" justify="between" gap="16">
        <Flex gap="16" direction="column">
          <Flex gap="8">
            <Text
              variant={isMobileS ? "body3-accent" : "body5-accent"}
              className={styles.title}
            >
              {question.title}
            </Text>
          </Flex>
          {!isMobileS && <ShowAnswer answer={question.shortAnswer} />}
        </Flex>
        {!isMobile && (
          <AnswerButtons
            onChange={handleIsLearned}
            isLearned={question.isLearned}
          />
        )}
      </Flex>
      <Image
        className={styles.image}
        imageSrc={question.imageSrc ?? mockQuestionImage}
        alt={question.title}
      />
      {isMobileS && <ShowAnswer answer={question.shortAnswer} />}
      {isMobile && (
        <AnswerButtons
          onChange={handleIsLearned}
          isLearned={question.isLearned}
        />
      )}
    </Flex>
  );
};
