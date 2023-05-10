import { LoginFormValues, ProjectAddFormValues, SkillsAddFormValues } from "./pages";

export interface LoginRequestType {
	values: LoginFormValues;
}

export interface SkillAddType {
	values: SkillsAddFormValues;
}

export interface ProjectAddType {
	values: ProjectAddFormValues;
}

export interface SkillDeleteType {
	id: number | undefined;
}

export interface ProjectDeleteType {
	id: number | undefined;
}

export interface SkillSingleType {
	id: string | undefined;
}

export interface ProjectSingleType {
	id: string | undefined;
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
