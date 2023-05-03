export interface RouteItem {
	key: number;
	path: string;
	element: JSX.Element;
}

export interface LoginFormValues {
	username: string;
	password: string;
}

export interface SkillsAddFormValues {
	skillsNameFa: string;
	skillsNameEn: string;
	descriptin: string;
	imageUrl: string;
}
