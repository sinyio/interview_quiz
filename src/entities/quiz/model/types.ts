import { Question } from '@/entities/question';

export type GetQuizResponse = {
	fullCount: number;
	skills: string[];
	questions: Question[];
};

export type GetQuizParams = {
	skills?: number[];
	complexity?: number[];
	collection?: number;
	limit: number;
	specialization: number;
};

export type QuizQuestion = Pick<
	Question,
	'id' | 'title' | 'imageSrc' | 'shortAnswer' | 'isLearned'
>;
