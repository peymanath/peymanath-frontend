import { useGlobalStore } from "@/context/GlobalStoreProvider";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
	const { globalStore } = useGlobalStore();
	return (
		<div className="flex flex-col gap-5 fixed top-3 bottom-3 right-3 rounded-lg bg-gray-800 text-white w-56 p-3">
			<div className="flex items-center justify-between gap-3 bg-primary py-1 px-3 rounded-lg">
				<span className="text-xl font-bold">داشبورد کاربری</span>
				<svg
					className="w-10 h-10"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 803.47 300.45">
					<rect
						fill="currentColor"
						x="335.25"
						y="167.47"
						width="132.99"
						height="132.99"
						rx="66.49"
						transform="translate(167.78 635.7) rotate(-90)"
					/>
					<rect
						fill="currentColor"
						x="111.01"
						y="167.47"
						width="132.99"
						height="132.99"
						rx="66.49"
						transform="translate(-56.45 411.47) rotate(-90)"
					/>
					<rect
						fill="currentColor"
						x="559.47"
						y="167.47"
						width="132.99"
						height="132.99"
						rx="66.49"
						transform="translate(392 859.92) rotate(-90)"
					/>
					<rect fill="currentColor" width="803.47" height="109.04" rx="54.52" />
				</svg>
			</div>
			{globalStore.sidebarMenu && (
				<ul className="flex flex-col gap-3">
					{globalStore.sidebarMenu.map(props => (
						<SidebarMenu {...props} />
					))}
				</ul>
			)}
		</div>
	);
}

export default Sidebar;
