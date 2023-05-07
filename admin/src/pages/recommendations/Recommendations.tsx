import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Recommendations() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "توصیه ها" });
	}, []);
	return <h2>Recommendations</h2>;
}
