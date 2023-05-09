import { Outlet } from "react-router-dom";
import { LoadingWrapper } from "./components/Loading";
import { RootState } from "./redux/Store";
import { useAppSelector } from "./redux/hook";
export default function App() {
	const Loading = useAppSelector((state: RootState) => state.loading.isLoading);
	return (
		<>
			{Loading && <LoadingWrapper />}
			<Outlet />
		</>
	);
}
