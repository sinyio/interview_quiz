import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '../../Flex';
import { Text } from '../../Text';
import styles from './Progress.module.css';

interface ProgressProps {
	title?: string;
	total: number;
	current: number;
}

export const Progress = ({ title, total, current }: ProgressProps) => {
	const { isMobileS } = useScreenSize();

	return (
		<Flex direction="column" gap={isMobileS ? '24' : '16'}>
			<Flex align="center">
				{title && <Text variant="body5-accent">{title}</Text>}
				{!isMobileS && <span className={styles.count}>{`${current}/${total}`}</span>}
			</Flex>
			<div className={styles.wrapper}>
				<progress className={styles.progress} value={current} max={total} />
				{isMobileS && (
					<span
						className={styles.count}
						style={{ float: 'right' }}
					>{`${current} из ${total}`}</span>
				)}
			</div>
		</Flex>
	);
};
