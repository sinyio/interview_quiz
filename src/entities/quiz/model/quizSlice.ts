import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizQuestion } from "./types";

interface QuizState {
  currentQuestion: number;
  totalQuestions: number;
  questions: QuizQuestion[];
  isCompleted: boolean;
}

const initialState: QuizState = {
  currentQuestion: 1,
  totalQuestions: 1,
  questions: [],
  isCompleted: false,
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
    completeQuiz: (state) => {
      state.isCompleted = true;
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
  resetQuiz,
  completeQuiz
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
