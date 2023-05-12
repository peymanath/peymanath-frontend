import { SkillsResponseDataItem } from "./Pages";
import { Id, TypeOptions } from "react-toastify";

// Toast
export interface ToastState {
	notif: Function | Id | string | void;
}
export interface ToastUpdatePayload {
	id: string;
	render: string;
	type: TypeOptions;
}
export interface ToastLoadingPayload {
	render: string;
}

// Loading
export interface LoadingState {
	isLoading: boolean;
}

// Login
export interface LoggedInState {
	isLoggedIn: boolean;
}

// Header Title
export interface HeaderTitleState {
	headerTitle: string;
}

// Token
export interface AccessTokenState {
	accessToken: string;
}

// Skill
export interface SkillsListItemState {
	skillsItem: SkillsResponseDataItem[] | any;
	erorr: string | null | undefined;
	loading: boolean;
}
