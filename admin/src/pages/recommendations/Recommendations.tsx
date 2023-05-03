import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Recommendations() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({
			...globalStore,
			titleHeader: "توصیه ها",
			showMenu: false,
		});
	}, []);
	return <h2>Recommendations</h2>;
}
