import { LoginFormValues, SkillsAddFormValues } from "./pages";

export interface LoginRequestType {
	values: LoginFormValues;
}

export interface SkillsAddType {
	values: SkillsAddFormValues;
}

export interface Http {
	get: Function;
	put: Function;
	delete: Function;
	post: Function;
}
