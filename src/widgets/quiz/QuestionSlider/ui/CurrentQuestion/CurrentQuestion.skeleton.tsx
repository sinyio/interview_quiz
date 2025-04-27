import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '@/shared/ui/Flex';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './CurrentQuestion.module.css';

export const CurrentQuestionSkeleton = () => {
  const { isMobile, isMobileS } = useScreenSize();

  return (
    <Flex gap="20" justify="between" direction={isMobile ? 'column' : 'row'}>
      <Flex direction="column" justify="between" flex={1}>
        <Flex direction="column" gap="16">
          <Flex direction="column" gap="8">
            <Skeleton width="80%" height={isMobileS ? 18 : 22} />
            <Skeleton width="60%" height={isMobileS ? 18 : 22} />
          </Flex>
          {!isMobileS && <Skeleton width={123} height={17} />}
        </Flex>
        {!isMobile && (
          <Flex gap="8">
            <Skeleton width={120} height={44} borderRadius={12} />
            <Skeleton width={98} height={44} borderRadius={12} />
          </Flex>
        )}
      </Flex>
      <Skeleton height={358} borderRadius={24} className={styles.image} />
      {isMobileS && <Skeleton width={123} height={17} />}
      {isMobile && (
        <Flex gap="8">
          <Skeleton width={isMobileS ? 48 : 120} height={44} borderRadius={12} />
          <Skeleton width={isMobileS ? 48 : 98} height={44} borderRadius={12} />
        </Flex>
      )}
    </Flex>
  );
};
