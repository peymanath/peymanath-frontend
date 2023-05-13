import Image from "next/image";
import Link from "next/link";

export default function Header() {
	type MenuListType = {
		id: number;
		title: string;
		url: string;
	};

	const menuList: MenuListType[] = [
		{
			id: 1,
			title: "Home",
			url: "/",
		},
		{
			id: 2,
			title: "Skills",
			url: "/skills",
		},
		{
			id: 2,
			title: "Project",
			url: "/project",
		},
	];

	return (
		<div className="container flex items-center justify-between py-5">
			<div className="flex items-center gap-3">
				<Image
					width="64"
					height="24"
					src="/image/white-logo.png"
					alt="Peyman ATH Logo"
					className="w-12 lg:w-14"
				/>
				<p className="hidden md:flex text-lg lg:text-xl font-semibold">
					Peyman Naderi
				</p>
			</div>
			<div>
				<nav>
					<ul className="flex items-center gap-5">
						{menuList.map(({ id, title, url }: MenuListType) => (
							<li key={id}>
								<Link href={url}>{title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}
