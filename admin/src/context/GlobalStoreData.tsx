import {
	ClipboardAdd,
	ClipboardList,
	Dashboard,
	DonateCoin,
	EditRectangle,
	MailBox,
	Setting,
	SpringNotesAdd,
	SpringNotesList,
	UserRectangle,
} from "react-huge-icons/outline";
import { GlobalStoreInterface } from "./GlobalStoreProvider";
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
			url: "/projects",
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
			id: 3,
			title: "مهارت ها",
			url: "/skills",
			icon: <SpringNotesList className={classIcon} />,
			submenu: [
				{
					id: 1,
					title: "افزودن مهارت",
					url: "/skill/add",
					icon: <SpringNotesAdd className={classIcon} />,
				},
			],
		},
		{
			id: 4,
			title: "دونیت",
			url: "/donors",
			icon: <DonateCoin className={classIcon} />,
		},
		{
			id: 5,
			title: "توصیه ها",
			url: "/recommendations",
			icon: <MailBox className={classIcon} />,
		},
		{
			id: 6,
			title: "تنظیمات سایت",
			url: "/setting/general",
			icon: <Setting className={classIcon} />,
			submenu: [
				{
					id: 1,
					title: "عمومی",
					url: "/setting/general",
					icon: <EditRectangle className={classIcon} />,
				},
				{
					id: 2,
					title: "حساب کاربری",
					url: "/setting/account",
					icon: <UserRectangle className={classIcon} />,
				},
			],
		},
	],
	titleHeader: "وبسایت پیمان نادری",
};
