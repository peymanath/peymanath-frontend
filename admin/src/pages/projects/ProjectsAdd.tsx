import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function ProjectsAdd() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "افزودن پروژه" });
	}, []);
	return <h2>ProjectsAdd</h2>;
}
