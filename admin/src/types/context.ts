import React, { ReactNode, Dispatch, SetStateAction } from "react";

export type LoadingProps = {
	children: ReactNode;
};

export type SetAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface SidebarMenuInterface {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuInterface[];
}
export interface GlobalStoreInterface {
	sidebarMenu: SidebarMenuInterface[];
	titleHeader: string;
	showMenu: boolean;
	isLogin: boolean;
	isLoading: boolean;
}
export interface HeaderContextTypes {
	globalStore: GlobalStoreInterface;
	setGlobalStore: SetAction<GlobalStoreInterface>;
}