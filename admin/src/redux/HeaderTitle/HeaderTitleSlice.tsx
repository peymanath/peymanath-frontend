import { HeaderTitleState } from "@/Types/Redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeaderTitleState = {
	headerTitle: "وبسایت پیمان نادری",
};

const HeaderTitleSlice = createSlice({
	name: "headerTitle",
	initialState,
	reducers: {
		newTitle: (state, action: PayloadAction<string>) => {
			state.headerTitle = action.payload;
		},
	},
});

export const { newTitle } = HeaderTitleSlice.actions;

export default HeaderTitleSlice.reducer;
