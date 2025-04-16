import { useLocation } from 'react-router-dom';

import { ROUTES } from '@/shared/config/router/routes';
import { Loader } from '@/shared/ui/Loader';
import { CreateQuizPageSkeleton } from '@/pages/quiz/CreateQuizPage';
import { QuizQuestionsPageSkeleton } from '@/pages/quiz/QuizQuestionsPage';
import { QuizResultPageSkeleton } from '@/pages/quiz/QuizResultPage';


const SkeletonGenerator = () => {
	const location = useLocation();


	switch (location.pathname) {
		case ROUTES.quiz.create:
			return <CreateQuizPageSkeleton />;
		case ROUTES.quiz.page:
			return <QuizQuestionsPageSkeleton />;
		case ROUTES.quiz.result:
			return <QuizResultPageSkeleton />;

		default:
			return <Loader />;
	}
};

export default SkeletonGenerator;