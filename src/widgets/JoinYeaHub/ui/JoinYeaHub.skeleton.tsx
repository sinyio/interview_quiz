import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { HTMLAttributes } from "react";

export const JoinYeaHubSkeleton = ({
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { isMobileS } = useScreenSize();

  return (
    <Card {...props}>
      <Flex gap="16" direction="column">
        <Flex gap="12" direction="column">
          <Skeleton height={30} maxWidth={250} />
          <Flex direction="column" gap="4">
            <Skeleton height={15} />
            <Skeleton height={15} width="80%" />
          </Flex>
          <Flex
            direction={isMobileS ? "column" : "row"}
            gap={isMobileS ? "8" : "20"}
          >
            <Flex direction="column" flex={1} gap="8">
              <Skeleton height={isMobileS ? 20 : 34} />
              <Skeleton height={isMobileS ? 20 : 34} />
            </Flex>
            <Flex direction="column" flex={1} gap="8">
              <Skeleton height={isMobileS ? 20 : 34} />
              <Skeleton height={isMobileS ? 20 : 34} />
            </Flex>
          </Flex>
          <Skeleton maxWidth={200} height={24} style={{ marginLeft: "auto" }} />
        </Flex>
      </Flex>
    </Card>
  );
};
