import { createContext, useState, useContext } from "react";
import { HeadersInterface, HeadersProps, SetAction } from "@/types/context";

const Headers = createContext({
	header: {} as Partial<HeadersInterface>,
	setHeader: {} as SetAction<HeadersInterface>,
});

function HeaderProvider({
	children,
	value = {} as HeadersInterface,
}: HeadersProps) {
	const [header, setHeader] = useState(value);

	!(JSON.stringify(header) === "{}") &&
		localStorage.setItem("headers", JSON.stringify(header));

	return (
		<Headers.Provider value={{ header, setHeader }}>
			{children}
		</Headers.Provider>
	);
}

const useHeader = () => {
	const context = useContext(Headers);

	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};

export { HeaderProvider, useHeader };
