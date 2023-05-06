import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function SettingAccount() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "تنظیمات حساب کاربری" });
	}, []);
	return <h2>SettingAccount</h2>;
}
