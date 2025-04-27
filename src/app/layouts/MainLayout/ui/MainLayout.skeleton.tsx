import { Flex } from '@/shared/ui/Flex';
import SkeletonGenerator from '../model/SkeletonGenerator';
import { HeaderSkeleton } from '@/widgets/Header';

export const MainLayoutSkeleton = () => {
  return (
    <div className="container">
      <Flex gap="24" direction="column">
        <HeaderSkeleton />
        <SkeletonGenerator />
      </Flex>
    </div>
  );
};
