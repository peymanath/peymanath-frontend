import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Page404() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle( "صفحه مورد نظر پیدا نشد !!"));
	}, []);
	return <h2>Not Fount</h2>;
}
