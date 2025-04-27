import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Flex } from '@/shared/ui/Flex';
import { JoinYeaHubSkeleton } from '@/widgets/JoinYeaHub';
import { PassedQuestionsListSkeleton } from '@/widgets/quiz/PassedQuestionsList';
import { withNavSkeleton } from '@/widgets/quiz/QuizNavigation';
import { YeaHubCommunitySkeleton } from '@/widgets/YeaHubCommunity';

export const QuizResultSkeleton = () => {
	const { isMobile, isMobileS } = useScreenSize();
	return (
		<Flex direction="column" gap={isMobileS ? '16' : '20'}>
			<Flex gap={isMobileS ? '16' : '20'} direction={isMobile ? 'column' : 'row'}>
				<JoinYeaHubSkeleton style={{ flex: 1 }} />
				<YeaHubCommunitySkeleton style={{ flex: 1 }} />
			</Flex>
			<PassedQuestionsListSkeleton />
		</Flex>
	);
};

export const QuizResultPageSkeleton = withNavSkeleton(QuizResultSkeleton);
