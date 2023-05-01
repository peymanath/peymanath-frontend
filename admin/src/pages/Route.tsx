import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login/login";
import Page404 from "./404/404";
import { RouteItem } from "@/types/pages";

const routeList: RouteItem[] = [
	{ key: 1, path: "/", element: <Dashboard /> },
	{ key: 2, path: "/login", element: <Login /> },
	{ key: 3, path: "*", element: <Page404 /> },
];

function AllRoute() {
	return (
		<Routes>
			{routeList.map((route: RouteItem) => (
				<Route {...route} />
			))}
		</Routes>
	);
}

export default AllRoute;
