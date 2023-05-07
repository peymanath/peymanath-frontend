import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function ProjectsAdd() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "افزودن پروژه" });
	}, []);
	return <h2>ProjectsAdd</h2>;
}
