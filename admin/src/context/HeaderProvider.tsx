import { createContext, useState, useContext, ReactNode } from "react";
import { SetAction } from "@/types/context";

const storageData =
	(localStorage.headers && JSON.parse(localStorage.headers)) || {};

interface HeaderTypes {
	token: string;
}

interface HeaderContextTypes {
	header: HeaderTypes;
	setHeader: SetAction<HeaderTypes>;
}
const Headers = createContext<HeaderContextTypes>({
	header: storageData,
	setHeader: () => {},
});

const HeaderProvider = ({ children }: { children: ReactNode }) => {
	const [header, setHeader] = useState<HeaderTypes>(storageData);

	localStorage.setItem(
		"headers",
		JSON.stringify({ ...storageData, ...header }),
	);

	return (
		<Headers.Provider value={{ header, setHeader }}>
			{children}
		</Headers.Provider>
	);
};

const useHeader = () => {
	const context = useContext(Headers);

	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};

export { HeaderProvider, useHeader };
