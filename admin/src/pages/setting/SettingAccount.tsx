import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function SettingAccount() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "تنظیمات حساب کاربری" });
	}, []);
	return <h2>SettingAccount</h2>;
}
