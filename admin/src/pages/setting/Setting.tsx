import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Setting() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "توصیه ها" });
	}, []);
	return <h2>Setting</h2>;
}
