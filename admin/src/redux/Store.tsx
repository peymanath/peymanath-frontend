import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "./Loading/LoadingSlice";
import HeaderTitleReducer from "./HeaderTitle/HeaderTitleSlice";
import AccessTokenReducer from "./AccessToken/AccessTokenSlice";
import UserLoggedInReducer from "./UserLoggedIn/UserLoggedInSlice";
import SkillsReducer from "./Skills/SkillsSlice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		headerTitle: HeaderTitleReducer,
		accessToken: AccessTokenReducer,
		userLoggedIn: UserLoggedInReducer,
		skills: SkillsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
