import { SetAction } from "@/types/context";
import { createContext, useState, useContext, ReactNode } from "react";
import { GlobalStoreData } from "./GlobalStoreData";

export interface SidebarMenuInterface {
	id: number;
	title: string;
	url: string;
	icon: JSX.Element;
	submenu?: SidebarMenuInterface[];
}
export interface GlobalStoreInterface {
	sidebarMenu: SidebarMenuInterface[];
	titleHeader: string
}
interface HeaderContextTypes {
	globalStore: GlobalStoreInterface;
	setGlobalStore: SetAction<GlobalStoreInterface>;
}
const GlobalStore = createContext<HeaderContextTypes>({
	globalStore: GlobalStoreData,
	setGlobalStore: () => {},
});

const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
	const [globalStore, setGlobalStore] =
		useState<GlobalStoreInterface>(GlobalStoreData);

	return (
		<GlobalStore.Provider value={{ globalStore, setGlobalStore }}>
			{children}
		</GlobalStore.Provider>
	);
};

const useGlobalStore = () => {
	const context = useContext(GlobalStore);

	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};

export { GlobalStoreProvider, useGlobalStore };
