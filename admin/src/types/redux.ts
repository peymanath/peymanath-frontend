import { SkillsListItem } from "./pages";

export interface LoadingState {
	isLoading: boolean;
}

export interface LoggedInState {
	isLoggedIn: boolean;
}

export interface HeaderTitleState {
	headerTitle: string;
}

export interface AccessTokenState {
	accessToken: string;
}

export interface SkillsListItemState {
	skillsItem: SkillsListItem[] | null | undefined;
	erorr: string | null | undefined;
	loading: boolean;
}
