import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { CreateQuizPage } from '@/pages/quiz/CreateQuizPage';
import { QuizPage } from '@/pages/quiz/QuizPage';
import { QuizResultPage } from '@/pages/quiz/QuizResultPage';
import { MainPage } from '@/pages/MainPage';
import { QuizLayout } from './layouts/QuizLayout';
import { Error404Page } from '@/pages/Error404Page';
import { ROUTES } from '@/shared/config/router/routes';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.main, element: <MainPage /> },
      { path: '*', element: <Error404Page /> },
      {
        element: <QuizLayout />,
        children: [
          { path: ROUTES.quiz.create, element: <CreateQuizPage /> },
          { path: ROUTES.quiz.page, element: <QuizPage /> },
          { path: ROUTES.quiz.result, element: <QuizResultPage /> },
        ],
      },
    ],
  },
]);
