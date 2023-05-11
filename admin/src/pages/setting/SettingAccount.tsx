import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import { useEffect } from "react";

export default function SettingAccount() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(newTitle("تنظیمات حساب کاربری"));
	}, []);
	return <h2>SettingAccount</h2>;
}
