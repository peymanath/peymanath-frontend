import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "./Loading/LoadingSlice";
import HeaderTitleReducer from "./HeaderTitle/HeaderTitleSlice";
import AccessTokenReducer from "./AccessToken/AccessTokenSlice";
import UserLoggedInReducer from "./UserLoggedIn/UserLoggedInSlice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		headerTitle: HeaderTitleReducer,
		accessToken: AccessTokenReducer,
		userLoggedIn: UserLoggedInReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
