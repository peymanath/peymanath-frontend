import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Recommendations() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "توصیه ها" });
	}, []);
	return <h2>Recommendations</h2>;
}
