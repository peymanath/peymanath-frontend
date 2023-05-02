import {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
	useContext,
} from "react";

interface GlobalStateInterface {
	token: string;
}
type Props = {
	children: ReactNode;
	value?: Partial<GlobalStateInterface>;
};

const Headers = createContext({
	header: {} as Partial<GlobalStateInterface>,
	setHeader: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

function HeaderProvider({
	children,
	value = {} as GlobalStateInterface,
}: Props) {
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
