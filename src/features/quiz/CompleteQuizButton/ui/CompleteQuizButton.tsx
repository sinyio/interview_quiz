import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/shared/ui/Button';
import styles from './CompleteQuizButton.module.css';

export const CompleteQuizButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button size="m" variant="destructive" className={styles.button} {...props}>
			Завершить
		</Button>
	);
};
