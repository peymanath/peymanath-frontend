import {
	GlobalStoreContextTypes,
	ContextChildren,
	GlobalStoreInterface,
} from "@/types/context";
import { useCallback, createContext, useContext, useState } from "react";
import { GlobalStoreData } from "./GlobalStoreData";

const GlobalStore = createContext<GlobalStoreContextTypes>({
	globalStore: GlobalStoreData,
	setGlobalStore: () => {},
});

const GlobalStoreProvider = ({ children }: ContextChildren) => {
	const [globalStore, setGlobalStores] =
		useState<GlobalStoreInterface>(GlobalStoreData);

	const setGlobalStore = useCallback(
		(props: GlobalStoreInterface) => {
			setGlobalStores({ ...globalStore, ...props });
		},
		[globalStore],
	);

	return (
		<GlobalStore.Provider value={{ globalStore, setGlobalStore }}>
			{children}
		</GlobalStore.Provider>
	);
};

const useGlobalStore = () => {
	const context = useContext(GlobalStore);

	if (!context)
		throw new Error("useGlobalStore must be used within a HeaderProvider");
	return context;
};

export { GlobalStoreProvider, useGlobalStore };
