import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function ProjectsAdd() {
    const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "افزودن پروژه" });
	}, []);
    return ( <h2>ProjectsAdd</h2> );
}