import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Dashboard() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({
			...globalStore,
			titleHeader: "داشبورد کاربری",
			showMenu: false,
		});
	}, []);
	return (
		<>
			<h2>Dashboard</h2>
			<h2>Dashboard</h2>
			<h2>Dashboard</h2>
			<h2>Dashboard</h2>

		</>
	);
}
