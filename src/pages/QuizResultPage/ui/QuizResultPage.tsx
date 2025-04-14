import { Flex } from "@/shared/ui/Flex";
import { JoinYeaHub } from "@/widgets/JoinYeaHub";
import { YeaHubCommunity } from "@/widgets/YeaHubCommunity/ui/YeaHubCommunity";
import { PassedQuestionsList } from "./PassedQuestionsList";
import styles from './QuizResultPage.module.css'

const QuizResultPage = () => {
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
