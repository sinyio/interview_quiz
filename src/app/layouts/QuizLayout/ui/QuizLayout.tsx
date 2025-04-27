import { Outlet } from 'react-router-dom';
import { Flex } from '@/shared/ui/Flex';
import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { QuizNavigation } from '@/widgets/quiz/QuizNavigation';

export const QuizLayout = () => {
	const { isMobileS } = useScreenSize();
	return (
		<Flex direction="column" gap={isMobileS ? '20' : '24'}>
			<QuizNavigation />
      <></>
			<Outlet />
		</Flex>
	);
};
