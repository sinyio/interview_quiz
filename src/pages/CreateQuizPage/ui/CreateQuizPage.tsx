import {
  ChooseCategories,
  ChooseComplexity,
  ChooseCount,
} from "@/features/question";
import { Card } from "@/shared/ui/Card";
import { useFilter } from "../model/hooks/useFilter";
import { Text } from "@/shared/ui/Text";
import { Flex } from "@/shared/ui/Flex";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Button } from "@/shared/ui/Button";
import { ArrowRight } from "@/shared/ui/Icons/ArrowRight/ArrowRight";
import { useNavigate } from "react-router-dom";
import styles from "./CreateQuizPage.module.css";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

const CreateQuizPage = () => {
  const { filter, updateFilter } = useFilter();
  const { isMobile, isMobileS } = useScreenSize();
  const isLoading = useAppSelector((state) => state.quiz.isLoading);
  const navigate = useNavigate();

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
        <Flex gap={isMobileS ? "16" : "24"} direction="column">
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
              <ChooseCount onChange={onChangeCount} count={filter.count} />
            </Flex>
          </Flex>
        </Flex>
        <Button
          size="m"
          onClick={onStartQuiz}
          className={styles.button}
          disabled={isLoading}
        >
          <Flex gap="8" justify="center" align="center">
            Начать <ArrowRight />
          </Flex>
        </Button>
      </Flex>
    </Card>
  );
};

export default CreateQuizPage;
