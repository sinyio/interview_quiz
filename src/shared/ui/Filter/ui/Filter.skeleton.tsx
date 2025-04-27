import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '@/shared/ui/Flex';
import { Skeleton } from '@/shared/ui/Skeleton';

interface FilterSkeletonProps {
  count: number;
  width?: number;
  height?: number;
}

export const FilterSkeleton = ({ count, width = 100, height }: FilterSkeletonProps) => {
  const { isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap="8">
      <Skeleton width={100} height={19} />
      <Flex wrap="wrap" gap="8">
        {[...Array(count)].map((_, index) => (
          <Skeleton
            width={width}
            height={height || (isMobileS ? 37 : 39)}
            borderRadius={12}
            key={index}
          />
        ))}
      </Flex>
    </Flex>
  );
};
