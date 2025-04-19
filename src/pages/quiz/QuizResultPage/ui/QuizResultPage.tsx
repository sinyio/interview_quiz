import { Flex } from "@/shared/ui/Flex";
import { JoinYeaHub } from "@/widgets/JoinYeaHub";
import { YeaHubCommunity } from "@/widgets/YeaHubCommunity/ui/YeaHubCommunity";
import { PassedQuestionsList } from "./PassedQuestionsList";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Navigate } from "react-router-dom";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { ROUTES } from "@/shared/config/router/routes";
import styles from "./QuizResultPage.module.css";

const QuizResultPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const isCompleted = useAppSelector((state) => state.quiz.isCompleted);
  console.log(isCompleted);

  if (!isCompleted) return <Navigate to={ROUTES.quiz.create} replace />;

  return (
    <Flex direction="column" gap={isMobileS ? "16" : "20"}>
      <Flex
        gap={isMobileS ? "16" : "20"}
        direction={isMobile ? "column" : "row"}
      >
        <JoinYeaHub className={styles.wrapper} />
        <YeaHubCommunity className={styles.wrapper} />
      </Flex>
      <PassedQuestionsList />
    </Flex>
  );
};

export default QuizResultPage;
