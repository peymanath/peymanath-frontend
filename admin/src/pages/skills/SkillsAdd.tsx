import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function SkillsAdd() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({
			...globalStore,
			titleHeader: "افزودن مهارت",
			showMenu: false,
		});
	}, []);
	return <h2>SkillsAdd</h2>;
}
