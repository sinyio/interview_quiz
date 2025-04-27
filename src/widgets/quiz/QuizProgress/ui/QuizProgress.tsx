import { Card } from '@/shared/ui/Card';
import { Progress } from '@/shared/ui/Progress';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import styles from './QuizProgress.module.css';

export const QuizProgress = () => {
	const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
	const totalQuestions = useAppSelector((state) => state.quiz.totalQuestions);

	return (
		<Card className={styles.progress}>
			<Progress title="Вопросы собеседования" current={currentQuestion} total={totalQuestions} />
		</Card>
	);
};
