import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { HTMLAttributes } from "react";

export const YeaHubCommunitySkeleton = ({
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { isMobileS, isMobile } = useScreenSize();

  return (
    <Card {...props}>
      <Flex gap="16" direction="column">
        <Flex gap="12" direction="column">
          <Skeleton maxWidth={370} height={30} />
          <Flex direction="column" gap="4">
            <Skeleton height={15} />
            <Skeleton height={15} width="80%" />
          </Flex>
          <Flex
            direction={isMobile && !isMobileS ? "row" : "column"}
            gap={isMobile && !isMobileS ? "20" : "8"}
          >
            <Skeleton maxWidth={isMobile ? "100%" : 250} height={34} />
            <Skeleton maxWidth={isMobile ? "100%" : 250} height={34} />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
