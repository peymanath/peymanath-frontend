import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function ProjectsAdd() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("افزودن پروژه"));
	}, []);
	return <h2>ProjectsAdd</h2>;
}
