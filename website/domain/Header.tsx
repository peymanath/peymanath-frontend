"use client";
import { MenuListType } from "TYPES/domain/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuLineHorizontal, RemoveThin } from "react-huge-icons/outline";
export default function Header() {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const pathName = usePathname();
	useEffect(() => {
		setShowMenu(false);
	}, [pathName]);

	const menuList: MenuListType[] = [
		{
			id: 1,
			title: "خانه",
			url: "/",
		},
		{
			id: 2,
			title: "مهارت ها",
			url: "/skills",
		},
		{
			id: 3,
			title: "پروژه ها",
			url: "/project",
		},
	];

	return (
		<div className="container flex items-center justify-between py-5">
			<div className="md:hidden">
				<MenuLineHorizontal
					className="w-12 h-12"
					onClick={() => setShowMenu(!showMenu)}
				/>
				<div
					className={`fixed flex flex-col top-5 right-5 min-w-[200px] backdrop-blur-sm bg-black/40 rounded-lg ${
						showMenu ? "flex" : "hidden"
					}`}>
					<div className="flex w-full">
						<RemoveThin
							className="w-12 h-12"
							onClick={() => setShowMenu(!showMenu)}
						/>
					</div>
					<nav>
						<ul className="flex flex-col gap-5 p-3">
							{menuList.map(({ id, title, url }: MenuListType) => (
								<li key={id}>
									<Link href={url} className="text-lg hover:text-primary">
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className="hidden md:flex">
				<nav>
					<ul className="flex items-center gap-5">
						{menuList.map(({ id, title, url }: MenuListType) => (
							<li key={id}>
								<Link href={url} className="text-lg hover:text-primary">
									{title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="flex items-center gap-3">
				<p className="hidden md:flex text-lg lg:text-xl font-semibold">
					Peyman Naderi
				</p>
				<Image
					width="64"
					height="24"
					src="/image/white-logo.png"
					alt="Peyman ATH Logo"
					className="w-12"
				/>
			</div>
		</div>
	);
}
