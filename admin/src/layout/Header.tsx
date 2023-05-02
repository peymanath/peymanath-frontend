import { useGlobalStore } from "@/context/GlobalStoreProvider";

export default function Header() {
	const { globalStore } = useGlobalStore();

	return (
		<div>
			<h1>{globalStore.titleHeader}</h1>
		</div>
	);
}
