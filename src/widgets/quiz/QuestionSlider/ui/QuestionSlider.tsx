import { completeQuiz } from '@/entities/quiz';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';
import { Separator } from '@/shared/ui/Separator';
import { useNavigate } from 'react-router-dom';
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion';
import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { ROUTES } from '@/shared/config/router/routes';
import { SwitchQuestion } from '@/features/quiz/SwitchQuestion';
import { CompleteQuizButton } from '@/features/quiz/CompleteQuizButton';

export const QuestionSlider = () => {
	const { isMobileS } = useScreenSize();

	const questions = useAppSelector((state) => state.quiz.questions);
	const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onCompleteQuiz = () => {
		dispatch(completeQuiz());
		navigate(ROUTES.quiz.result);
	};

	return (
		<Card>
			<Flex direction="column" gap={isMobileS ? '16' : '24'}>
				<SwitchQuestion />
				<CurrentQuestion question={questions[currentQuestion - 1]} />
				<Separator />
				<CompleteQuizButton onClick={onCompleteQuiz} />
			</Flex>
		</Card>
	);
};
