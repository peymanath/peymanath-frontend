export interface ImageResponse {
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
}

// Project
export interface ProjectsCategoryListItem {
    createdAt: Date
    publishedAt: Date
    updatedAt: Date
    title: string
}

export interface ProjectsCategoryResponseDataItem {
    attributes: ProjectsCategoryListItem;
    id: number;
}

export interface ProjectsListItem {
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
    title: string;
    slug: string
    desc: string;
    sourceUrl: string
    previewUrl: string
    developing: boolean
    metaTitle: string
    metaDescription: string
    metaImage: {
        data: ImageResponse
    }
    project_categories: {
        data: ProjectsCategoryResponseDataItem[]
    }
    skills: {
        data: SkillsResponseDataItem[]
    }
    thumbnail: {
        data: ImageResponse;
    };
}

export interface ProjectsResponseDataItem {
    attributes: ProjectsListItem;
    id: number;
}

export interface ProjectsResponseData {
    data: {
        data: ProjectsResponseDataItem[];
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

export interface ProjectsListItemSlide {
    dataProject: ProjectsListItem
}

// Skill
export interface SkillsListItem {
    createdAt: Date;
    descriptin: string;
    publishedAt: Date;
    thumbnail: {
        data: ImageResponse[];
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

export interface SkillsAddFormValues {
    id?: number | string | undefined;
    titleFa?: string;
    titleEn: string;
    descriptin?: string;
    thumbnail?: string | number;
    skill_projects: String[] | Number[];
    recommends: String[] | Number[];
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
