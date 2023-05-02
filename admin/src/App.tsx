import { Outlet } from "react-router-dom";
import { LoadingWrapper } from "./components/Loading";
import { useLoading } from "@/context/LoadingProvider";

export default function App() {
	const { isLoading } = useLoading();
	console.log(isLoading);

	return (
		<>
			{isLoading && <LoadingWrapper />}
			<Outlet />
		</>
	);
}
