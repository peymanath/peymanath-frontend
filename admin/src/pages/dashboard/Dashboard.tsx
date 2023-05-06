import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Dashboard() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "داشبورد کاربری" });
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
