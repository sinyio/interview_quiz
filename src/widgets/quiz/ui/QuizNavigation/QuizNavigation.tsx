import { useLocation, useNavigate } from "react-router-dom";
import { QuizNavigationItem } from "./QuizNavigationItem/QuizNavigationItem";
import { quizNavigation } from "../../model/constants/quizNavigation";
import { ROUTES } from "@/shared/config/router/routes";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import { CaretLeft } from "@/shared/ui/Icons/CaretLeft";
import styles from "./QuizNavigation.module.css";

export const QuizNavigation = () => {
  const { isMobile } = useScreenSize();

  const location = useLocation();
  const navigate = useNavigate();

  const currentPathIndex = quizNavigation.findIndex(
    (item) => item.path === location.pathname
  );

  console.log(currentPathIndex, currentPathIndex + 1);

  const filteredNavigation = quizNavigation
    .filter(
      (item) =>
        !(
          location.pathname === ROUTES.quiz.result &&
          item.path === ROUTES.quiz.page
        ) ||
        !(
          location.pathname === ROUTES.quiz.page &&
          item.path === ROUTES.quiz.result
        )
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
