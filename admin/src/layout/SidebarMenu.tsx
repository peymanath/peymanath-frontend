import { DirectionDownDouble } from "react-huge-icons/outline";
import { NavLink } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { SidebarMenuItem } from "@/Types/Pages";

function SidebarMenu({ title, url, icon, submenu }: SidebarMenuItem) {
	const [showItem, setShowItem] = useState(false);

	const toggleMenu = useCallback(() => {
		setShowItem(!showItem);
	}, [showItem]);

	return (
		<li
			className={`hover:bg-secondary hover:text-white ${
				showItem && "bg-gray-100"
			} rounded-lg p-2 duration-300`}>
			<div className="flex gap-3 items-center justify-between">
				<NavLink to={url} className="flex gap-3 items-center">
					<div className="flex gap-3 items-center">
						<span>{icon}</span>
						<span className="text-lg font-light">{title}</span>
					</div>
				</NavLink>
				{submenu && (
					<div onClick={toggleMenu} className="cursor-pointer">
						<DirectionDownDouble
							className={`w-5 h-5 ${showItem ? "rotate-180" : ""}`}
						/>
					</div>
				)}
			</div>
			{submenu && (
				<ul className={`flex flex-col gap-3 pt-2 ${!showItem ? "hidden" : ""}`}>
					{submenu.map(sub => (
						<li
							key={sub.id}
							className="hover:bg-secondary rounded-lg duration-300">
							<NavLink
								to={sub.url}
								className="flex gap-3 items-center justify-between">
								<div className="flex gap-3 items-center">
									<span>{sub.icon}</span>
									<span className="text-lg font-light">{sub.title}</span>
								</div>
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}

export default React.memo(SidebarMenu);
