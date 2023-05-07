import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Setting() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "تنظیمات" });
	}, []);
	return <h2>Setting</h2>;
}
