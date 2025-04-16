import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { QuizNavigationSkeleton } from "@/widgets/quiz";

export const QuizQuestionsPageSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap={isMobileS ? "20" : "24"}>
      <QuizNavigationSkeleton />
      <Flex direction="column" gap={isMobileS ? "16" : isMobile ? "20" : "24"}>
        <Card style={{ borderRadius: "12px" }}>
          <Flex direction="column" gap="16">
            <Flex align="center" justify="between">
              <Skeleton width={240} height={24} />
              <Skeleton width={25} height={20} />
            </Flex>
            <Skeleton height={5} />
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap={isMobileS ? "16" : "24"}>
            <Flex justify="between">
              <Skeleton width={70} height={20} />
              <Skeleton width={70} height={20} />
            </Flex>
            <Flex gap="20" justify="between">
              <Flex direction="column" justify="between" flex={1}>
                <Flex direction="column" gap="16">
                  <Skeleton width="80%" height={25} />
                  <Skeleton width="60%" height={25} />
                  <Skeleton width={123} height={17} />
                </Flex>
                <Flex gap="8">
                  <Skeleton width={120} height={44} borderRadius={12} />
                  <Skeleton width={98} height={44} borderRadius={12} />
                </Flex>
              </Flex>
              <Skeleton
                height={358}
                borderRadius={24}
                style={{ flexBasis: "53%" }}
              />
            </Flex>
            <Skeleton height={1} />
            <Skeleton
              width={170}
              height={48}
              borderRadius={12}
              style={{ marginLeft: "auto" }}
            />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
