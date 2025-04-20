import { useLocation } from "react-router-dom";

import { ROUTES } from "@/shared/config/router/routes";
import { Loader } from "@/shared/ui/Loader";
import { CreateQuizPageSkeleton } from "@/pages/quiz/CreateQuizPage";
import { QuizPageSkeleton } from "@/pages/quiz/QuizPage";
import { QuizResultPageSkeleton } from "@/pages/quiz/QuizResultPage";

const SkeletonGenerator = () => {
  const location = useLocation();

  switch (location.pathname) {
    case ROUTES.quiz.create:
      return <CreateQuizPageSkeleton withNav />;
    case ROUTES.quiz.page:
      return <QuizPageSkeleton withNav />;
    case ROUTES.quiz.result:
      return <QuizResultPageSkeleton withNav />;

    default:
      return <Loader />;
  }
};

export default SkeletonGenerator;
