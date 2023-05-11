import { SkillsListItem, SkillsResponseDataItem } from "./Pages";

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
	skillsItem: SkillsResponseDataItem[] | any;
	erorr: string | null | undefined;
	loading: boolean;
}
