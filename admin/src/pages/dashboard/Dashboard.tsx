import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import { strapi } from "@/services/HttpServises";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("داشبورد کاربری"));
		// @yF5Axi@7uTDjZk
		// peymanath
		const fetchApi = async () => {
			try {
				const data = await strapi.get("/skills?populate=*");
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchApi();
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
