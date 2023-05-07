export interface RouteItem {
	key: number;
	path: string;
	element: JSX.Element;
}

export interface LoginFormValues {
	username: string;
	password: string;
	joinedAt: Date,
	active: boolean
}

export interface SkillsAddFormValues {
	skillsNameFa: string;
	skillsNameEn: string;
	descriptin: string;
	thumbnail:string
}

export interface SidebarMenuItem {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuItem[];
}