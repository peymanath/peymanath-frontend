
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Setting() {
    const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "تنظیمات" });
	}, []);
    return ( <h2>Setting</h2> );
}
