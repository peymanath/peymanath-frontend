import { Outlet } from "react-router-dom";
import { LoadingWrapper } from "./components/Loading";
import { useGlobalStore } from "./context/GlobalStoreProvider";

export default function App() {

	const { globalStore } = useGlobalStore();
	return (
		<>
			{globalStore.isLoading && <LoadingWrapper />}
			<Outlet />
		</>
	);
}
