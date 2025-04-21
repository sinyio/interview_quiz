import { Card } from "@/shared/ui/Card";
import { useFilter } from "../model/hooks/useFilter";
import { Text } from "@/shared/ui/Text";
import { Flex } from "@/shared/ui/Flex";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { useNavigate } from "react-router-dom";
import { useGetSkillsQuery } from "@/entities/skill";
import { CreateQuizPageSkeleton } from "./CreateQuizPage.skeleton";
import { useFilterHandlers } from "../model/hooks/useFilterHandlers";
import { ROUTES } from "@/shared/config/router/routes";
import { ChooseCategories } from "@/features/question/ChooseCategories";
import { ChooseComplexity } from "@/features/question/ChooseComplexity";
import { ChooseMode } from "@/features/question/ChooseMode";
import { ChooseCount } from "@/features/question/ChooseCount";
import { StartQuizButton } from "@/features/quiz/StartQuizButton";
import styles from "./CreateQuizPage.module.css";

const FRONTEND_DEVELOPER_SPECIALIZATION_ID = 11;
const COMPLEXITY_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CreateQuizPage = () => {
  const { isMobile, isMobileS } = useScreenSize();

  const navigate = useNavigate();

  const { data: skills, isLoading } = useGetSkillsQuery({
    specializations: [FRONTEND_DEVELOPER_SPECIALIZATION_ID],
  });

  const { filter } = useFilter();
  const { onChangeSkills, onChangeComplexity, onChangeCount } =
    useFilterHandlers();

  const onStartQuiz = () => {
    navigate(ROUTES.quiz.page, {
      state: {
        skills:
          filter.skills.length > 0
            ? filter.skills
            : skills?.data.map((skill) => skill.id),
        complexity:
          filter.complexity.length > 0 ? filter.complexity : COMPLEXITY_LIST,
        limit: filter.count,
        specialization: FRONTEND_DEVELOPER_SPECIALIZATION_ID,
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
