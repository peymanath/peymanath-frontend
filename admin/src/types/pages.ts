// Project
export interface RouteItem {
	key: number;
	path: string;
	element: JSX.Element;
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
export interface ProjectSingleResponseData {
	data: ProjectAddFormValues;
	status: number;
}
export interface ProjectAddFormValues {
	id?: number | string | undefined;
	title: string;
	descriptin: string;
	thumbnail?: string;
	publishedAt: Date;
	skills: [] | null;
}

// Skill
export interface SkillsListItem {
	createdAt: Date;
	descriptin: string;
	publishedAt: Date;
	thumbnail: {
		data: {
			attributes: {
				alternativeText: null;
				caption: null;
				createdAt: Date;
				ext: string;
				height: number;
				mime: string;
				name: string;
				previewUrl: number;
				size: number;
				updatedAt: Date;
				url: string;
				width: number;
			};
			id: number;
		}[];
	};
	titleEn: string;
	titleFa: string;
	updatedAt: Date;
}
export interface SkillsResponseDataItem {
	attributes: SkillsListItem;
	id: number;
}

export interface SkillsResponseData {
	data: {
		data: SkillsResponseDataItem[];
		meta: {
			pagination: {
				page: number;
				pageCount: number;
				pageSize: number;
				total: number;
			};
		};
	};
	status: number;
}

export interface SkillSingleResponseData {
	data: SkillsAddFormValues;
	status: number;
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
export interface SkillFormComponenItemtInterface {
	headerDesciption: string;
	headerTitle: string;
	headerUrl: string;
	formTitle: string;
	formSubmit: string;
}
export interface SkillFormComponentInterface {
	formik: any;
	dataPage: SkillFormComponenItemtInterface;
}

// Login Form
export interface LoginFormValues {
	identifier: string;
	password: string;
}

// SideBar
export interface SidebarMenuItem {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuItem[];
}
