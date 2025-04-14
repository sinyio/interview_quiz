import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizQuestion } from "./types";

interface QuizState {
  currentQuestion: number;
  totalQuestions: number;
  questions: QuizQuestion[];
  isLoading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  currentQuestion: 1,
  totalQuestions: 1,
  questions: [],
  isLoading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setTotalQuestions: (state, action: PayloadAction<number>) => {
      state.totalQuestions = action.payload;
    },
    setQuestions: (state, action: PayloadAction<QuizQuestion[]>) => {
      state.questions = action.payload;
    },
    markQuestionAsLearned: (
      state,
      action: PayloadAction<{ questionIndex: number; isLearned: boolean }>
    ) => {
      const { questionIndex, isLearned } = action.payload;
      state.questions[questionIndex] = {
        ...state.questions[questionIndex],
        isLearned: isLearned,
      };
    },
    resetQuiz: () => {
      return initialState;
    },
  },
});

export const {
  setCurrentQuestion,
  setQuestions,
  setTotalQuestions,
  markQuestionAsLearned,
  resetQuiz
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
