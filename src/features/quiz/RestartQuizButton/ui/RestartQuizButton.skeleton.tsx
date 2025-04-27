import { Skeleton } from '@/shared/ui/Skeleton';
import { HTMLAttributes } from 'react';

interface RestartQuizButtonSkeletonProps {
	className?: string;
}

export const RestartQuizButtonSkeleton = ({
	className,
	...props
}: RestartQuizButtonSkeletonProps & HTMLAttributes<HTMLDivElement>) => {
	return <Skeleton maxWidth={240} height={48} {...props} className={className} />;
};
