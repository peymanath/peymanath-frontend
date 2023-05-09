import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Projects() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("پروژه ها"));
	}, []);
	return <h2>Projects</h2>;
}
