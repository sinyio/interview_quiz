import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Card } from "@/shared/ui/Card";
import { PassedQuestionsItem } from "../PassedQuestionsItem/PassedQuestionsItem";
import mockQuestionImage from "@/shared/assets/images/mockQuestion.svg";
import styles from './PassedQuestionsList.module.css'

export const PassedQuestionsList = () => {
  const questions = useAppSelector((state) => state.quiz.questions);
  return (
    <Card className={styles.wrapper} >
      {questions.map(({ imageSrc, title, isLearned }) => (
        <PassedQuestionsItem
          title={title}
          imageSrc={imageSrc ?? mockQuestionImage}
          isLearned={isLearned}
        />
      ))}
    </Card>
  );
};
