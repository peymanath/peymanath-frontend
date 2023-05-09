import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Setting() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("تنظیمات"));
	}, []);
	return <h2>Setting</h2>;
}
