import { ButtonHTMLAttributes } from 'react';
import { ChevronLeft } from '@/shared/ui/Icons/ChevronLeft';
import { ChevronRight } from '@/shared/ui/Icons/ChevronRight/ChevronRight';
import styles from './ArrowButton.module.css';

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'back' | 'next';
}

const variants = {
	back: (
		<>
			<ChevronLeft />
			Назад
		</>
	),
	next: (
		<>
			Далее
			<ChevronRight />
		</>
	),
};

export const ArrowButton = ({ variant, ...props }: ArrowButtonProps) => {
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...props}>
			{variants[variant]}
		</button>
	);
};
