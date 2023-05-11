import { LoadingState } from "@/Types/Redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoadingState = {
	isLoading: false,
};

const LoadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		allowedLoading: (state, action: PayloadAction) => {
			state.isLoading = true;
		},
		disAllowedLoading: (state, action: PayloadAction) => {
			state.isLoading = false;
		},
	},
});

export const { allowedLoading, disAllowedLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
