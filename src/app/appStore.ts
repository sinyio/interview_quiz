import { quizReducer } from '@/entities/quiz';
import { skillsReducer } from '@/entities/skill';
import { baseApi } from '@/shared/config/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quiz: quizReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
