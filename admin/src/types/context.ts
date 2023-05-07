import React, { ReactNode } from "react";

export interface ContextChildren {
	children: ReactNode;
}

export type LoadingProps = {
	children: ReactNode;
};

export type SetAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface GlobalStoreInterface {
	titleHeader?: string;
	showMenu?: boolean;
	isLogin?: boolean;
	isLoading?: boolean;
	token?: string;
}
export interface GlobalStoreAction {
	type: string;
	value: string;
}

export interface GlobalStoreContextTypes {
	globalStore: GlobalStoreInterface;
	setGlobalStore: (e: GlobalStoreInterface) => void;
}
