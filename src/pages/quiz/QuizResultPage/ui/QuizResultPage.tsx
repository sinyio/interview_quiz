import { Flex } from '@/shared/ui/Flex';
import { JoinYeaHub } from '@/widgets/JoinYeaHub';

import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { ROUTES } from '@/shared/config/router/routes';
import { YeaHubCommunity } from '@/widgets/YeaHubCommunity';
import { PassedQuestionsList } from '@/widgets/quiz/PassedQuestionsList';

const QuizResultPage = () => {
	const { isMobile, isMobileS } = useScreenSize();

	const isCompleted = useAppSelector((state) => state.quiz.isCompleted);

	if (!isCompleted) return <Navigate to={ROUTES.quiz.create} replace />;

	return (
		<Flex direction="column" gap={isMobileS ? '16' : '20'}>
			<Flex gap={isMobileS ? '16' : '20'} direction={isMobile ? 'column' : 'row'}>
				<JoinYeaHub style={{ flex: 1 }} />
				<YeaHubCommunity style={{ flex: 1 }} />
			</Flex>
			<PassedQuestionsList />
		</Flex>
	);
};

export default QuizResultPage;
