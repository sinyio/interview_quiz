import { useLocation } from "react-router-dom";
import styles from "./QuizNavigation.module.css";
import { QuizNavigationItem } from "./QuizNavigationItem/QuizNavigationItem";

const quizNavigation = [
  { path: "/", name: "Главная" },
  { path: "/create-quiz", name: "Собеседование" },
  { path: "/quiz", name: "Квиз" },
  { path: "/quiz-result", name: "Список пройденных вопросов" },
];

export const QuizNavigation = () => {
  const location = useLocation();
  const currentPathIndex = quizNavigation.findIndex(
    (item) => item.path === location.pathname
  );

  const filteredNavigation = quizNavigation
    .filter(
      (item) => !(location.pathname === "/quiz-result" && item.path === "/quiz")
    )
    .slice(0, currentPathIndex + 1);

  return (
    <div className={styles.wrapper}>
      {filteredNavigation.map(({ path, name }, index) => (
        <QuizNavigationItem path={path} name={name} isFirst={index === 0} key={name} />
      ))}
    </div>
  );
};
