import { ReactNode, Dispatch, SetStateAction } from "react";

export interface SidebarMenuInterface {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuInterface[];
}
export interface GlobalStoreInterface {
	sidebarMenu: SidebarMenuInterface[];
}
export type GlobalStoreProps = {
	children: ReactNode;
	value?: Partial<GlobalStoreInterface>;
};
export interface HeadersInterface {
	token: string;
}
export type HeadersProps = {
	children: ReactNode;
	value?: Partial<HeadersInterface>;
};
export type LoadingProps = {
	children: ReactNode;
};

export type SetAction<T> = Dispatch<SetStateAction<Partial<T>>>;
