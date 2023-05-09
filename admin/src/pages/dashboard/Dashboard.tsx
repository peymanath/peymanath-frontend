import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Dashboard() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("داشبورد کاربری"));
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
