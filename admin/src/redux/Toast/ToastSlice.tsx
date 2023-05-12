import {
	ToastLoadingPayload,
	ToastUpdatePayload,
	ToastState,
} from "@/Types/Redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: ToastState = {
	notif: "",
};

const ToastSlice = createSlice({
	name: "userLoggedIn",
	initialState,
	reducers: {
		ToastUpdate: (state, action: PayloadAction<ToastUpdatePayload>) => {
			state.notif = toast.update(action.payload.id, {
				render: action.payload.render,
				type: action.payload.type,
				isLoading: false,
				autoClose: 2000,
			});
		},
		ToastLoading: (state, action: PayloadAction<ToastLoadingPayload>) => {
			state.notif = toast.loading("در حال دریافت مهارت ها ...");
		},
	},
});

export const { ToastUpdate, ToastLoading } = ToastSlice.actions;

export default ToastSlice.reducer;
