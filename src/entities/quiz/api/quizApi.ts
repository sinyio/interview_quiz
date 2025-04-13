import { baseApi } from "@/shared/config/api";
import { GetQuizResponse, GetQuizParams } from "../model/types";
import { setQuestions, setTotalQuestions } from "../model/quizSlice";

const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<GetQuizResponse, GetQuizParams>({
      query: (params) => ({
        url: "/interview-preparation/quizzes/mock/new",
        params,
      }),
      providesTags: ["Quiz"],
      keepUnusedDataFor: 0,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        const quizQuestions = data.questions.map((question) => ({
          id: question.id,
          title: question.title,
          isLearned: question.isLearned,
          shortAnswer: question.shortAnswer,
          imageSrc: question.imageSrc,
        }));

        dispatch(setQuestions(quizQuestions));
        dispatch(setTotalQuestions(data.fullCount));
      },
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;
