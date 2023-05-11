import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { RouteItem } from "@/Types/Pages";
import Layout from "../Layout";
import React, { useEffect } from "react";
import { routeList, routeSingle } from "@/pages/RouteList";
import { useAppDispatch, useAppSelector } from "@/redux/Hook";

function AllRoute() {
	const navigate = useNavigate();
	const location = useLocation();

	const { userLoggedIn, accessToken } = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!userLoggedIn.isLoggedIn) navigate("/login");
		else {
			if (location.pathname == "/login") navigate("/");
		}
	}, [userLoggedIn.isLoggedIn]);

	useEffect(() => {
		localStorage.setItem(
			"accessToken",
			JSON.stringify(accessToken.accessToken),
		);
	}, [accessToken.accessToken]);

	return userLoggedIn.isLoggedIn ? (
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
