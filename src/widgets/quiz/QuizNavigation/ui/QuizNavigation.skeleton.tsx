import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '@/shared/ui/Flex';
import { Skeleton } from '@/shared/ui/Skeleton';

export const QuizNavigationSkeleton = () => {
  const { isMobile } = useScreenSize();

  return (
    <Flex gap="8" align="center">
      {isMobile && <Skeleton width={22} height={22} />}
      <Skeleton width={100} height={22} />
      {!isMobile && (
        <>
          <Skeleton width={22} height={22} />
          <Skeleton width={100} height={22} />
          <Skeleton width={22} height={22} />
          <Skeleton width={100} height={22} />
        </>
      )}
    </Flex>
  );
};
