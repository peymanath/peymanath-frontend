import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Donors() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ type: "titleHeader", value: "دونیت ها" });
	}, []);
	return <h2>دونیت ها</h2>;
}
