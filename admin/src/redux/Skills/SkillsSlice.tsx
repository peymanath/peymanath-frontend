import GetSkillsRequest from "@/services/Skills/GetSkills";
import { mockapi } from "@/services/httpServises";
import { SkillsListItem, SkillsResponseData } from "@/types/pages";
import { SkillsListItemState } from "@/types/redux";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";

export const getAsyncSkills = createAsyncThunk(
	"skills/getAsyncSkills",
	async (_, { rejectWithValue }) => {
		try {
			const response = await mockapi.get<SkillsListItem[], SkillsResponseData>(
				"/skills",
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
const initialState: SkillsListItemState = {
	skillsItem: [],
	erorr: null,
	loading: false,
};

const SkillsSlice = createSlice({
	name: "skills",
	initialState,
	reducers: {
		setSkills: (state, action: PayloadAction) => {},
	},
	extraReducers: builder => {
		builder
			.addCase(getAsyncSkills.fulfilled, (state, action) => {
				return {
					...state,
					skillsItem: action.payload,
					loading: false,
					erorr: null,
				};
			})
			.addCase(getAsyncSkills.pending, (state, action) => {
				return {
					...state,
					skillsItem: [],
					loading: true,
					erorr: null,
				};
			})
			.addCase(getAsyncSkills.rejected, (state, action) => {
				return {
					...state,
					skillsItem: [],
					loading: false,
					erorr: action.error.message,
				};
			})
	},
});

export const { setSkills } = SkillsSlice.actions;

export default SkillsSlice.reducer;
