import { Text } from '@/shared/ui/Text';
import { Flex } from '@/shared/ui/Flex';
import { useEffect, useState } from 'react';
import { TextHtml } from '@/shared/ui/TextHtml';
import styles from './ShowAnswer.module.css';

interface ShowAnswerProps {
	answer: string;
}

export const ShowAnswer = ({ answer }: ShowAnswerProps) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(false);
	}, [answer]);

	return (
		<Flex gap="16" direction="column">
			{isVisible && <TextHtml html={answer} />}
			<div className={styles.wraper} onClick={() => setIsVisible((prev) => !prev)}>
				<Text variant="body2" className={styles.title}>
					{isVisible ? 'Скрыть ответ' : 'Посмотреть ответ'}
				</Text>
			</div>
		</Flex>
	);
};
