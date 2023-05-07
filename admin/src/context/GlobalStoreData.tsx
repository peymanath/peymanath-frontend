import { GlobalStoreInterface } from "@/types/context";

export const GlobalStoreData: GlobalStoreInterface = {
	titleHeader: "وبسایت پیمان نادری",
	showMenu: false,
	isLoading: false,
	isLogin:
		localStorage.headers && JSON.parse(localStorage.headers).token
			? true
			: false,
	token: (localStorage.headers && JSON.parse(localStorage.headers).token) || "",
};
