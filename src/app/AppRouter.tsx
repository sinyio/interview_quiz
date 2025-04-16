import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { CreateQuizPage } from "@/pages/quiz/CreateQuizPage";
import { QuizQuestionsPage } from "@/pages/quiz/QuizQuestionsPage";
import { QuizResultPage } from "@/pages/quiz/QuizResultPage";
import { MainPage } from "@/pages/MainPage";
import { QuizLayout } from "./layouts/QuizLayout";
import { Error404Page } from "@/pages/Error404Page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "*", element: <Error404Page /> },
      {
        element: <QuizLayout />,
        children: [
          { path: "/create-quiz", element: <CreateQuizPage /> },
          { path: "/quiz", element: <QuizQuestionsPage /> },
          { path: "/quiz-result", element: <QuizResultPage /> },
        ],
      },
    ],
  },
]);
