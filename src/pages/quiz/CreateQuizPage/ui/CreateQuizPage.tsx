import {
  ChooseCategories,
  ChooseComplexity,
  ChooseCount,
  ChooseMode,
} from "@/features/question";
import { Card } from "@/shared/ui/Card";
import { useFilter } from "../model/hooks/useFilter";
import { Text } from "@/shared/ui/Text";
import { Flex } from "@/shared/ui/Flex";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { useNavigate } from "react-router-dom";
import { StartQuizButton } from "@/features/quiz";
import { useGetSkillsQuery } from "@/entities/skill";
import { CreateQuizPageSkeleton } from "./CreateQuizPage.skeleton";
import { useFilterHandlers } from "../model/hooks/useFilterHandlers";
import styles from "./CreateQuizPage.module.css";

const CreateQuizPage = () => {
  const navigate = useNavigate();
  const { isMobile, isMobileS } = useScreenSize();

  const { data: skills, isLoading } = useGetSkillsQuery({
    specializations: [11],
  });

  const { filter } = useFilter();
  const { onChangeSkills, onChangeComplexity, onChangeCount } =
    useFilterHandlers();

  const onStartQuiz = async () => {
    navigate("/quiz", {
      state: {
        skills: filter.skills,
        complexity: filter.complexity,
        limit: filter.count,
        specialization: 11,
      },
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
            <div className={styles.wrapper}>
              <ChooseCategories
                skills={skills?.data}
                onChange={onChangeSkills}
                selectedCategories={filter.skills}
              />
            </div>
            <Flex direction="column" gap={isMobileS ? "16" : "24"}>
              <ChooseComplexity
                onChange={onChangeComplexity}
                selectedComplexity={filter.complexity}
              />
              <ChooseMode />
              <ChooseCount onChange={onChangeCount} count={filter.count} />
            </Flex>
          </Flex>
        </Flex>
        <StartQuizButton onClick={onStartQuiz} className={styles.button} />
      </Flex>
    </Card>
  );
};

export default CreateQuizPage;
