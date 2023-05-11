import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import { useEffect } from "react";

export default function Recommendations() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("توصیه ها"));
	}, []);
	return <h2>Recommendations</h2>;
}
