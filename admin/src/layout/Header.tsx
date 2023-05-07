import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { MenuLineHorizontal, RemoveThin } from "react-huge-icons/outline";
import SidebarMenu from "./SidebarMenu";
import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { sidebarMenu } from "./MenuList";
import { SidebarMenuItem } from "@/types/pages";

function Header() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	const location = useLocation();

	const toggleMenu = useCallback(() => {
		setGlobalStore({ showMenu: !globalStore.showMenu });
	}, [globalStore.showMenu]);

	useEffect(() => {
		setGlobalStore({ showMenu: false });
	}, [location]);

	return (
		<div className="flex gap-3 items-center justify-between w-full p-3 bg-white rounded-lg sticky top-3 min-h-[50px] shadow z-[998]">
			<h1 className="text-lg">{globalStore.titleHeader}</h1>
			<div className="relative flex md:hidden cursor-pointer">
				<MenuLineHorizontal className="w-10 h-10" onClick={toggleMenu} />

				<div
					id="mobile-menu"
					className="fixed top-5 left-5 bg-white rounded-lg shadow z-[999]">
					<div
						className={`relative w-full h-full p-2 pl-12 ${
							globalStore.showMenu ? "flex" : "hidden"
						}`}>
						<RemoveThin
							className="absolute top-1 left-1 w-10 h-10"
							onClick={toggleMenu}
						/>

						{sidebarMenu && (
							<ul className="flex flex-col gap-3">
								{sidebarMenu.map((props: SidebarMenuItem) => (
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

export default React.memo(Header);
