export interface RouteItem {
	key: number;
	path: string;
	element: JSX.Element;
}
export interface SkillsListItem {
	id?: number;
	titleFa?: string;
	titleEn?: string;
	descriptin?: string;
	thumbnail?: string;
	recommmendations?: number;
	projects?: number;
	publishedAt: Date;
}
export interface ProjectsListItem {
	id?: number;
	title?: string;
	descriptin?: string;
	thumbnail?: string;
	publishedAt: Date;
	skills: [] | null;
}

export interface ProjectsResponseData {
	data: ProjectsListItem[] | undefined;
	status: number;
}

export interface SkillsResponseData {
	data: SkillsListItem[] | undefined;
	status: number;
}

export interface SkillSingleResponseData {
	data: SkillsAddFormValues;
	status: number;
}

export interface ProjectSingleResponseData {
	data: ProjectAddFormValues;
	status: number;
}

export interface LoginFormValues {
	username: string;
	password: string;
	joinedAt: Date;
	active: boolean;
}

export interface ProjectAddFormValues {
	id?: number | string | undefined;
	title: string;
	descriptin: string;
	thumbnail?: string;
	publishedAt: Date;
	skills: [] | null;
}

export interface SkillsAddFormValues {
	id?: number | string | undefined;
	titleFa: string;
	titleEn: string;
	descriptin: string;
	thumbnail?: string;
	recommmendations?: number;
	projects?: number;
	publishedAt: Date;
}

export interface SidebarMenuItem {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuItem[];
}
