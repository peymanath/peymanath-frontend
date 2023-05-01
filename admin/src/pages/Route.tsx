import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login/login";
import Page404 from "./404/404";
import { RouteItem } from "@/types/pages";
import Layout from "../layout";
import { useEffect, useState } from "react";

const routeList: RouteItem[] = [
	{ key: 1, path: "/", element: <Dashboard /> },
	{ key: 2, path: "*", element: <Page404 /> },
];

const routeSingle: RouteItem[] = [{ key: 1, path: "*", element: <Login /> }];
function AllRoute() {
	const navigate = useNavigate();

	const [isLogin, setIsLogin] = useState<boolean>(false);

	useEffect(() => {
		// localStorage.getItem("accessToken") ? setIsLogin(true) : navigate("/login");
	}, []);

	return isLogin ? (
		<Layout>
			<Routes>
				{routeList.map((route: RouteItem) => (
					<Route {...route} />
				))}
			</Routes>
		</Layout>
	) : (
		<Routes>
			{routeSingle.map((route: RouteItem) => (
				<Route {...route} />
			))}
		</Routes>
	);
}

export default AllRoute;
