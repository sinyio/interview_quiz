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
import { useGetSkillsQuery } from "@/entities/skill";
import { FRONTEND_DEVELOPER_SPECIALIZATION_ID } from "@/entities/specialization";
import { CreateQuizPageSkeleton } from "./CreateQuizPage.skeleton";
import { StartQuizButton } from "./StartQuizButton/StartQuizButton";
import styles from "./CreateQuizPage.module.css";

const CreateQuizPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const { isLoading } = useGetSkillsQuery({
    specializations: [FRONTEND_DEVELOPER_SPECIALIZATION_ID],
  });

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
        <StartQuizButton className={styles.button} />
      </Flex>
    </Card>
  );
};

export default CreateQuizPage;
