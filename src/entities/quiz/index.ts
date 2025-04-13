export {
  quizReducer,
  setCurrentQuestion,
  setQuestions,
  setTotalQuestions,
  markQuestionAsLearned,
} from "./model/quizSlice";
export { useGetQuizQuery } from "./api/quizApi";
export type { QuizQuestion } from "./model/types";
