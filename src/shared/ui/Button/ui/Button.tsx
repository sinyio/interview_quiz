import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonVariant } from '../model/types';
import { getTagByVaraiant, tagsByVariants } from '../model/helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	size?: 'l' | 'm';
	variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	({ children, variant = 'primary', size = 'l', className, ...props }, ref) => {
		const element = getTagByVaraiant(variant);
		const Tag = element as React.ElementType;

		return (
			<Tag
				ref={ref}
				className={cn(
					styles[tagsByVariants[variant]],
					styles[variant],
					element === 'button' && styles[size],
					className,
				)}
				{...props}
			>
				{children}
			</Tag>
		);
	},
);
