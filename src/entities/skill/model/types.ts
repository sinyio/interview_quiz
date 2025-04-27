import { Specialization } from '@/entities/specialization';
import { PageableResponse } from '@/shared/types/types';

export interface Skill {
	id: number;
	title: string;
	description: string;
	imageSrc?: string | null;
	createdAt?: string;
	updatedAt?: string;
	specializations?: Specialization[];
}

export type GetSkillsResponse = PageableResponse<Skill[]>;

export type GetSkillsParams = {
	page?: number;
	limit?: number;
	specializations?: number[];
};
