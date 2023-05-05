import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />

			<div className="md:pr-64 p-3">
				<Header />

				<main className="pt-7">{children}</main>
			</div>
		</>
	);
}
