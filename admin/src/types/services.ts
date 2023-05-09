import { LoginFormValues, SkillsAddFormValues } from "./pages";

export interface LoginRequestType {
	values: LoginFormValues;
}

export interface SkillAddType {
	values: SkillsAddFormValues;
}

export interface SkillDeleteType {
	id: number | undefined;
}

export interface onSubmitFormik {
	setSubmitting: Function;
	resetForm: Function;
}

export interface Http {
	get: Function;
	put: Function;
	delete: Function;
	post: Function;
}
