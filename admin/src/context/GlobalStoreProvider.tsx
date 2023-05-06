import { GlobalStoreInterface, HeaderContextTypes } from "@/types/context";
import { createContext, useContext, ReactNode, useReducer } from "react";
import { GlobalStoreData } from "./GlobalStoreData";
import { stat } from "fs";

const reducer = (state: any, action: CountAction) => {
	return action.type
		? { ...state, [action.type]: action.value }
		: state;
};
// An interface for our actions
interface CountAction {
	type: string;
	value: string;
}

const GlobalStore = createContext<{
	globalStore: GlobalStoreInterface;
	setGlobalStore: React.Dispatch<any>;
}>({
	globalStore: GlobalStoreData,
	setGlobalStore: () => null,
});

const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
	const [globalStore, setGlobalStore] = useReducer(reducer, GlobalStoreData);

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
