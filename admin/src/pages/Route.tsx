import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { RouteItem } from "@/types/pages";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { useHeader } from "@/context/HeaderProvider";
import { routeList, routeSingle } from "@/pages/RouteList";
import { useGlobalStore } from "@/context/GlobalStoreProvider";

export default function AllRoute() {
	const navigate = useNavigate();
	const headers: string = localStorage.headers;
	const { header } = useHeader();
	const { globalStore, setGlobalStore } = useGlobalStore();
	const location = useLocation();

	useEffect(() => {
		if (
			headers &&
			JSON.parse(headers).token &&
			JSON.parse(headers).token !== ""
		) {
			setGlobalStore({ ...globalStore, isLogin: true });
			if (location.pathname === "/login") navigate("/");
		} else {
			navigate("/login");
		}
	}, [header]);

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
