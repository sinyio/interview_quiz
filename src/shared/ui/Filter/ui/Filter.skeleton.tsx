import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";

import { FilterProps } from "./Filter";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

export const FilterSkeleton = ({
  count,
  width,
}: Partial<FilterProps> & { width?: number; count: number }) => {
  const { isMobileS } = useScreenSize();

  return (
    <Flex direction="column" gap="8">
      <Skeleton width={100} height={19} />
      {/* <TextSkeleton variant="body2" width={100} /> */}
      <Flex wrap="wrap" gap="8">
        {[...Array(count)].map((_, index) => (
          <Skeleton
            width={width || 100}
            height={isMobileS ? 42 : 44}
            borderRadius={12}
            key={index}
          />
        ))}
      </Flex>
    </Flex>
  );
};
