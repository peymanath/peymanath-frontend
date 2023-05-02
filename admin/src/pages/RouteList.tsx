import Dashboard from "./dashboard";
import Login from "./login/login";
import Page404 from "./404/404";
import { RouteItem } from "@/types/pages";

export const routeList: RouteItem[] = [
	{ key: 1, path: "/", element: <Dashboard /> },
	{ key: 2, path: "*", element: <Page404 /> },
];
export const routeSingle: RouteItem[] = [
	{ key: 1, path: "*", element: <Login /> },
];
