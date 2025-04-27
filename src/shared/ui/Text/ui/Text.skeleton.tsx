import { Skeleton } from '@/shared/ui/Skeleton';
import { TextVariant } from '../model/types';
import { TextProps } from './Text';

export const TextSkeleton = ({
	className,
	variant,
	width,
}: Omit<TextProps, 'children'> & { width: string | number }) => {
	const skeletonHeight: Record<TextVariant, number> = {
		h1: 60 * 1.15,
		h2: 40 * 1.15,
		h3: 34 * 1.15,
		h4: 18 * 1.27,
		h5: 18 * 1.27,
		body1: 12 * 1.2,
		'body1-accent': 12 * 1.2,
		body2: 14 * 1.2,
		'body2-accent': 14 * 1.2,
		'body2-strong': 14 * 1.2,
		body3: 16 * 1.2,
		'body3-accent': 16 * 1.3,
		'body3-strong': 16 * 1.3,
		body4: 18 * 1.2,
		'body4-accent': 18 * 1.2,
		body5: 20 * 1.2,
		'body5-accent': 20 * 1.2,
		'body5-strong': 20 * 1.2,
	};

	return (
		<Skeleton
			className={className}
			height={skeletonHeight[variant]}
			width={width}
			borderRadius={8}
		/>
	);
};
