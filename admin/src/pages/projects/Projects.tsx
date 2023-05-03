import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Projects() {
    const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "پروژه ها", showMenu: false   });
	}, []);
    return ( <h2>Projects</h2> );
}