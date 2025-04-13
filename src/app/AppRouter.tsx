import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { CreateQuizPage } from "@/pages/CreateQuizPage";
import { QuizQuestionsPage } from "@/pages/QuizQuestionsPage";
import { QuizResultPage } from "@/pages/QuizResultPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <CreateQuizPage /> },
      { path: "/quiz", element: <QuizQuestionsPage /> },
      { path: "/quiz-result", element: <QuizResultPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
