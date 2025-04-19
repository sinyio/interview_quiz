import {
  ChooseCategoriesSkeleton,
  ChooseComplexitySkeleton,
  ChooseCountSkeleton,
  ChooseModeSkeleton,
} from "@/features/question";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { withNavSkeleton } from "@/widgets/quiz";
import styles from "./CreateQuizPage.module.css";

export const CreateQuizSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();

  return (
    <Card className={styles.container}>
      <Flex direction="column" gap={isMobileS ? "24" : "48"}>
        <Flex direction="column" gap={isMobileS ? "16" : "24"}>
          <Skeleton
            width={200}
            height={isMobileS ? 24 : 28}
            borderRadius={12}
          />
          <Flex
            gap={isMobileS ? "16" : isMobile ? "24" : "48"}
            direction={isMobile ? "column" : "row"}
          >
            <div style={{ flexBasis: "60%" }}>
              <ChooseCategoriesSkeleton />
            </div>
            <Flex direction="column" gap={isMobileS ? "16" : "24"}>
              <ChooseComplexitySkeleton />
              <ChooseModeSkeleton />
              <ChooseCountSkeleton />
            </Flex>
          </Flex>
        </Flex>
        <Skeleton
          width={170}
          height={48}
          borderRadius={12}
          className={styles.button}
        />
      </Flex>
    </Card>
  );
};

export const CreateQuizPageSkeleton = withNavSkeleton(CreateQuizSkeleton);
