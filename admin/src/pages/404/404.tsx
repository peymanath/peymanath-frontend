import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Page404() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "صفحه مورد نظر پیدا نشد !!" });
	}, []);
	return <h2>Not Fount</h2>;
}
