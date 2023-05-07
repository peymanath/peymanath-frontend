import Header from "./Header";
import React, { useMemo } from "react";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />

			<div className="md:pr-72 p-3">
				<Header />

				<main className="pt-7">{children}</main>
			</div>
		</>
	);
}
export default React.memo(Layout);
