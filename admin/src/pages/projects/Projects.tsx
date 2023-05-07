import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Projects() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "پروژه ها" });
	}, []);
	return <h2>Projects</h2>;
}
