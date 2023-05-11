import {
	LoginFormValues,
	ProjectAddFormValues,
	SkillsAddFormValues,
} from "./Pages";

export interface Http {
	get: Function;
	put: Function;
	delete: Function;
	post: Function;
}

// Project
export interface ProjectAddType {
	values: ProjectAddFormValues;
}
export interface ProjectDeleteType {
	id: number | undefined;
}
export interface ProjectEditType {
	id: string | undefined;
	values: ProjectAddFormValues;
}
export interface ProjectSingleType {
	id: string | undefined;
}

// Skill
export interface SkillAddType {
	values: SkillsAddFormValues;
}
export interface SkillDeleteType {
	id: number | undefined;
}
export interface SkillSingleType {
	id: string | undefined;
}
export interface SkillEditType {
	id: string | undefined;
	values: SkillsAddFormValues;
}

// Login Request
export interface LoginRequestType {
	values: LoginFormValues;
}

// Formik
export interface onSubmitFormik {
	setSubmitting: Function;
	resetForm: Function;
}
