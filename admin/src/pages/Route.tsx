import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { RouteItem } from "@/types/pages";
import Layout from "../layout";
import React, { useEffect } from "react";
import { routeList, routeSingle } from "@/pages/RouteList";
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { click } from "@testing-library/user-event/dist/click";

function AllRoute() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setGlobalStore({ showMenu: false });
	}, [location]);

	useEffect(() => {
		if (!globalStore.isLogin) navigate("/login");
		else {
			if (location.pathname == "/login") navigate("/");
		}
	}, [globalStore.isLogin]);

	useEffect(() => {
		localStorage.setItem(
			"headers",
			JSON.stringify({ token: globalStore.token }),
		);
	}, [globalStore.token]);

	return globalStore.isLogin ? (
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

export default React.memo(AllRoute);
