import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { FilterSkeleton } from "@/shared/ui/Filter";
import styles from "./CreateQuizPage.module.css";
import { QuizNavigationSkeleton } from "@/widgets/quiz";

export const CreateQuizPageSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();

  return (
    <Flex direction="column" gap={isMobileS ? "20" : "24"}>
      <QuizNavigationSkeleton />
      <Card className={styles.container}>
        <Flex direction="column" gap={isMobileS ? "24" : "48"}>
          <Flex direction="column" gap={isMobileS ? "16" : "24"}>
            <Skeleton
              width={200}
              height={isMobileS ? 24 : 29}
              borderRadius={12}
            />
            <Flex
              gap={isMobileS ? "16" : "48"}
              direction={isMobile ? "column" : "row"}
            >
              <div style={{ flexBasis: "60%" }}>
                <FilterSkeleton count={isMobile ? 12 : 20} />
              </div>
              <Flex direction="column" gap="24">
                <FilterSkeleton count={4} width={60} />
                <FilterSkeleton count={3} width={120} />
                <FilterSkeleton count={1} width={115} />
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
    </Flex>
  );
};
