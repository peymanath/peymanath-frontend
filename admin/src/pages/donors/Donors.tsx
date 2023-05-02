import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Donors() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "Donors" });
	}, []);
	return <h2>Donors</h2>;
}
