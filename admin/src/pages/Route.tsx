import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteItem } from "@/types/pages";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { useHeader } from "@/context/HeaderProvider";
import { routeList, routeSingle } from "@/pages/RouteList";

export default function AllRoute() {
	const navigate = useNavigate();
	const headers: string = localStorage.headers;
	const isLoginInit = headers && JSON.parse(headers).token ? true : false;

	const [isLogin, setIsLogin] = useState<boolean>(isLoginInit);
	const { header } = useHeader();

	useEffect(() => {
		if (headers && JSON.parse(headers).token) {
			setIsLogin(true);
			navigate("/");
		} else {
			navigate("/login");
		}
	}, [header]);

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
