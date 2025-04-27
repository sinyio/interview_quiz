import { baseApi } from '@/shared/config/api';
import { GetSkillsResponse, GetSkillsParams } from '../model/types';
import { setSkills } from '../model/skillsSlice';

export const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSkills: builder.query<GetSkillsResponse, GetSkillsParams>({
			query: (params) => ({
				url: '/skills',
				params,
			}),
			keepUnusedDataFor: 0,
			providesTags: ['Skills'],
			async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
				const { data: skills } = await queryFulfilled;
				dispatch(setSkills(skills.data));
			},
		}),
	}),
});

export const { useGetSkillsQuery } = skillsApi;
