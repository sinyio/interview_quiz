import { Flex } from "@/shared/ui/Flex";
import { JoinYeaHub } from "@/widgets/JoinYeaHub";
import { YeaHubCommunity } from "@/widgets/YeaHubCommunity/ui/YeaHubCommunity";
import { PassedQuestionsList } from "./PassedQuestionsList";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Navigate } from "react-router-dom";
import styles from "./QuizResultPage.module.css";

const QuizResultPage = () => {
  const isCompleted = useAppSelector((state) => state.quiz.isCompleted);

  if (!isCompleted) return <Navigate to="/" replace />;

  return (
    <Flex direction="column" gap="20">
      <Flex gap="20">
        <JoinYeaHub className={styles.wrapper} />
        <YeaHubCommunity className={styles.wrapper} />
      </Flex>
      <PassedQuestionsList />
    </Flex>
  );
};

export default QuizResultPage;
