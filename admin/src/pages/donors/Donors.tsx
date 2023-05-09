import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Donors() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("دونیت ها"));
	}, []);
	return <h2>دونیت ها</h2>;
}
