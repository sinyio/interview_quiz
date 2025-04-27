import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';
import { Skeleton } from '@/shared/ui/Skeleton';

export const QuizProgressSkeleton = () => {
  const { isMobileS } = useScreenSize();

  return (
    <Card style={{ borderRadius: '12px' }}>
      <Flex direction="column" gap={isMobileS ? '24' : '16'}>
        <Flex align="center" justify="between">
          <Skeleton width={240} height={24} />
          {!isMobileS && <Skeleton width={30} height={19} />}
        </Flex>
        <Flex direction="column" gap="4">
          <Skeleton height={isMobileS ? 3 : 5} />
          {isMobileS && <Skeleton width={40} height={19} style={{ marginLeft: 'auto' }} />}
        </Flex>
      </Flex>
    </Card>
  );
};
