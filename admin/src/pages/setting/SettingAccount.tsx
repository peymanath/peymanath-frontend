
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function SettingAccount() {
    const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "تنظیمات حساب‌کاربری" });
	}, []);
    return ( <h2>SettingAccount</h2> );
}
