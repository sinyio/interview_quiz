import { Flex } from '@/shared/ui/Flex';
import { QuizNavigationSkeleton } from '../../ui/QuizNavigation.skeleton';
import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { ComponentType } from 'react';

interface WithNavProps {
  withNav?: boolean;
}

export const withNavSkeleton = <P extends object>(Component: ComponentType<P>) => {
  return ({ withNav = false, ...props }: WithNavProps) => {
    const { isMobileS } = useScreenSize();
    return withNav ? (
      <Flex direction="column" gap={isMobileS ? '20' : '24'}>
        <QuizNavigationSkeleton />
        <Component {...(props as P)} />
      </Flex>
    ) : (
      <Component {...(props as P)} />
    );
  };
};
