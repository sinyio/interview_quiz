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
import styles from "./CreateQuizPage.module.css";
import { useGetSkillsQuery } from "@/entities/skill";
import { CreateQuizPageSkeleton } from "./CreateQuizPage.skeleton";

const CreateQuizPage = () => {
  const { filter, updateFilter } = useFilter();
  const { isMobile, isMobileS } = useScreenSize();
  const navigate = useNavigate();

  const { isLoading } = useGetSkillsQuery({});

  const onChangeSkills = (skills: number[]) => {
    updateFilter({ ...filter, skills: skills });
  };

  const onChangeComplexity = (complexity: number[]) => {
    updateFilter({ ...filter, complexity: complexity });
  };

  const onChangeCount = (count: number) => {
    updateFilter({ ...filter, count: count });
  };

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

  return (
    <Card>
      <Flex direction="column" gap={isMobileS ? "24" : "48"}>
        <Flex direction="column" gap={isMobileS ? "16" : "24"}>
          <Text variant="h1" className={styles.title}>
            Собеседование
          </Text>
          <Flex
            gap={isMobileS ? "16" : "48"}
            direction={isMobile ? "column" : "row"}
          >
            <div className={styles.wrapper}>
              <ChooseCategories
                onChange={onChangeSkills}
                selectedCategories={filter.skills}
                specialization={11}
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
