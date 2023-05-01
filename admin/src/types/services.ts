import { LoginFormValues } from "./pages";

export interface LoginRequestType {
	values: LoginFormValues;
}

export interface Http {
	get: Function;
	put: Function;
	delete: Function;
	post: Function;
}
