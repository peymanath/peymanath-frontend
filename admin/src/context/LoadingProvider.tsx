import { LoadingProps, SetAction } from "@/types/context";
import { createContext, useState, useContext, ReactNode } from "react";

interface HeaderContextTypes {
	isLoading: boolean;
	setIsLoading: SetAction<boolean>;
}
const Loading = createContext<HeaderContextTypes>({
	isLoading: false,
	setIsLoading: () => {},
});

const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Loading.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</Loading.Provider>
	);
};

const useLoading = () => {
	const context = useContext(Loading);

	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};

export { LoadingProvider, useLoading };
