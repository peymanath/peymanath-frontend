import { GlobalStoreInterface } from "@/types/context";
import {
	ClipboardAdd,
	ClipboardList,
	Dashboard,
	DonateCoin,
} from "react-huge-icons/outline";
const classIcon: string = "w-6 h-6";

export const GlobalStoreData: GlobalStoreInterface = {
	sidebarMenu: [
		{
			id: 1,
			title: "داشبورد",
			url: "/",
			icon: <Dashboard className={classIcon} />,
		},
		{
			id: 2,
			title: "پروژه ها",
			url: "/project",
			icon: <ClipboardList className={classIcon} />,
			submenu: [
				{
					id: 1,
					title: "افزودن پروژه",
					url: "/project/add",
					icon: <ClipboardAdd className={classIcon} />,
				},
			],
		},
		{
			id: 2,
			title: "دونیت",
			url: "/donate",
			icon: <DonateCoin className={classIcon} />,
		},
	],
};
