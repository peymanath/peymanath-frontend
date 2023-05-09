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

export interface SkillsResponseData {
	data: SkillsListItem[] | undefined;
	status: number;
}

export interface LoginFormValues {
	username: string;
	password: string;
	joinedAt: Date;
	active: boolean;
}

export interface SkillsAddFormValues {
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
