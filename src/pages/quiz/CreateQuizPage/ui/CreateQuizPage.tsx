import {
  ChooseCategories,
  ChooseComplexity,
  ChooseCount,
  ChooseMode,
} from "@/features/questionFilter";
import { Card } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";
import { Flex } from "@/shared/ui/Flex";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { StartQuizButton } from "@/features/quiz/StartQuizButton";
import { usePreparedFilters } from "../model/usePreparedFilters";
import { ROUTES } from "@/shared/config/router/routes";
import { useNavigate } from "react-router-dom";
import { useGetSkillsQuery } from "@/entities/skill";
import { FRONTEND_DEVELOPER_SPECIALIZATION_ID } from "@/entities/specialization";
import { CreateQuizPageSkeleton } from "./CreateQuizPage.skeleton";
import styles from "./CreateQuizPage.module.css";

const CreateQuizPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const navigate = useNavigate();

  const { isLoading } = useGetSkillsQuery({
    specializations: [FRONTEND_DEVELOPER_SPECIALIZATION_ID],
  });

  const { preparedFilters } = usePreparedFilters();
  const onStartQuiz = () => {
    navigate(ROUTES.quiz.page, {
      state: preparedFilters,
    });
  };

  if (isLoading) return <CreateQuizPageSkeleton />;

  return (
    <Card>
      <Flex direction="column" gap={isMobileS ? "24" : "48"}>
        <Flex direction="column" gap={isMobileS ? "16" : "24"}>
          <Text variant="h1" className={styles.title}>
            Собеседование
          </Text>
          <Flex
            gap={isMobileS ? "16" : isMobile ? "24" : "48"}
            direction={isMobile ? "column" : "row"}
          >
            <ChooseCategories className={styles.wrapper} />
            <Flex direction="column" gap={isMobileS ? "16" : "24"}>
              <ChooseComplexity />
              <ChooseMode />
              <ChooseCount />
            </Flex>
          </Flex>
        </Flex>
        <StartQuizButton onClick={onStartQuiz} className={styles.button} />
      </Flex>
    </Card>
  );
};

export default CreateQuizPage;
