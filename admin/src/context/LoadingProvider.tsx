import { LoadingProps, SetAction } from "@/types/context";
import { createContext, useState, useContext } from "react";

const Loading = createContext({
	isLoading: {} as Partial<boolean>,
	setIsLoading: {} as SetAction<boolean>,
});

function LoadingProvider({ children }: LoadingProps) {
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
