import { ROUTES } from "@/shared/config/router/routes";

export const quizNavigation = [
  { path: ROUTES.main, name: "Главная" },
  { path: ROUTES.quiz.create, name: "Собеседование" },
  { path: ROUTES.quiz.page, name: "Квиз" },
  { path: ROUTES.quiz.result, name: "Список пройденных вопросов" },
];
