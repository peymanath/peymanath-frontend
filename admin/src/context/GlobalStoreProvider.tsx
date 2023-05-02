import {
	GlobalStoreInterface,
	GlobalStoreProps,
	SetAction,
} from "@/types/context";
import { createContext, useState, useContext } from "react";
import { GlobalStoreData } from "./GlobalStoreData";

const GlobalStore = createContext({
	globalStore: { ...GlobalStoreData } as Partial<GlobalStoreInterface>,
	setGlobalStore: {} as SetAction<GlobalStoreInterface>,
});

function GlobalStoreProvider({
	children,
	value = {} as GlobalStoreInterface,
}: GlobalStoreProps) {
	const [globalStore, setGlobalStore] = useState(value);

	return (
		<GlobalStore.Provider value={{ globalStore, setGlobalStore }}>
			{children}
		</GlobalStore.Provider>
	);
}

const useGlobalStore = () => {
	const context = useContext(GlobalStore);

	if (!context) {
		throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
	}
	return context;
};

export { GlobalStoreProvider, useGlobalStore };
