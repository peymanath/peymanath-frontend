import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Page404() {
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader: "صفحه مورد نظر پیدا نشد !!" });
	}, []);
	return <h2>Not Fount</h2>;
}
