import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { MenuLineHorizontal, RemoveThin } from "react-huge-icons/outline";
import SidebarMenu from "./SidebarMenu";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	const location = useLocation();

	const toggleMenu = () => {
		setGlobalStore({ ...globalStore, showMenu: !globalStore.showMenu });
	};

	useEffect(() => {
		setGlobalStore({ ...globalStore, showMenu: false });
	}, [location]);

	return (
		<div className="flex gap-3 items-center justify-between w-full p-3 bg-white rounded-lg sticky top-3 min-h-[50px] shadow-icon">
			<h1 className="text-lg">{globalStore.titleHeader}</h1>
			<div className="relative flex md:hidden cursor-pointer">
				<MenuLineHorizontal className="w-10 h-10" onClick={toggleMenu} />

				<div
					id="mobile-menu"
					className="fixed top-5 left-5 bg-white rounded-lg shadow-icon">
					<div
						className={`relative w-full h-full p-2 pl-12 ${
							globalStore.showMenu ? "flex" : "hidden"
						}`}>
						<RemoveThin
							className="absolute top-1 left-1 w-10 h-10"
							onClick={toggleMenu}
						/>

						{globalStore.sidebarMenu && (
							<ul className="flex flex-col gap-3">
								{globalStore.sidebarMenu.map(props => (
									<SidebarMenu key={props.id} {...props} />
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
