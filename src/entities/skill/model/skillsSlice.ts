import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from './types';

interface SkillsState {
	skills: Skill[];
}

const initialState: SkillsState = {
	skills: [],
};

const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		setSkills: (state, action: PayloadAction<Skill[]>) => {
			state.skills = action.payload;
		},
	},
});

export const { setSkills } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
