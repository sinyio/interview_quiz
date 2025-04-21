import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Card } from "@/shared/ui/Card";
import { PassedQuestionsItem } from "./PassedQuestionsItem/PassedQuestionsItem";
import { Text } from "@/shared/ui/Text";
import { RestartQuizButton } from "@/features/quiz";
import mockQuestionImage from "@/shared/assets/images/mockQuestion.svg";
import styles from "./PassedQuestionsList.module.css";

export const PassedQuestionsList = () => {
  const questions = useAppSelector((state) => state.quiz.questions);

  return (
    <Card>
      <Text variant="body5-accent" className={styles.title}>
        Список пройденных вопросов собеседования
      </Text>
      <div className={styles.list}>
        {questions.map(({ imageSrc, title, isLearned }) => (
          <PassedQuestionsItem
            title={title}
            imageSrc={imageSrc ?? mockQuestionImage}
            isLearned={isLearned}
            key={title}
          />
        ))}
      </div>
      <RestartQuizButton className={styles.button} />
    </Card>
  );
};
