import {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
	useContext,
} from "react";

type Props = {
	children: ReactNode;
};

const Loading = createContext({
	isLoading: {} as Partial<boolean>,
	setIsLoading: {} as Dispatch<SetStateAction<Partial<boolean>>>,
});

function LoadingProvider({ children }: Props) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Loading.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</Loading.Provider>
	);
}

const useLoading = () => {
	const context = useContext(Loading);

	if (!context) {
		throw new Error("useLoading must be used within a HeaderProvider");
	}
	return context;
};

export { LoadingProvider, useLoading };
