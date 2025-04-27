import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './IconWrapper.module.css';

export const IconWrapper = ({
	children,
	className,
	...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.iconWrapper} ${className}`} {...props}>
			{children}
		</div>
	);
};
