import { useLocation, useNavigate } from 'react-router-dom';
import { QuizNavigationItem } from './QuizNavigationItem/QuizNavigationItem';
import { quizNavigation } from '../model/constants/quizNavigation';
import { ROUTES } from '@/shared/config/router/routes';
import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { CaretLeft } from '@/shared/ui/Icons/CaretLeft';
import styles from './QuizNavigation.module.css';

export const QuizNavigation = () => {
  const { isMobile } = useScreenSize();

  const location = useLocation();
  const navigate = useNavigate();

  const currentPathIndex = quizNavigation.findIndex((item) => item.path === location.pathname);

  const filteredNavigation = quizNavigation
    .filter(
      (item) =>
        !(!isMobile && location.pathname === ROUTES.quiz.result && item.path === ROUTES.quiz.page),
    )
    .slice(isMobile ? currentPathIndex : 0, currentPathIndex + 1);

  return (
    <div className={styles.wrapper}>
      {isMobile && <CaretLeft onClick={() => navigate(ROUTES.quiz.create)} />}
      {filteredNavigation.map(({ path, name }, index) => (
        <QuizNavigationItem
          path={path}
          name={name}
          isFirst={index === 0}
          key={name}
          backArrow={isMobile}
        />
      ))}
    </div>
  );
};
