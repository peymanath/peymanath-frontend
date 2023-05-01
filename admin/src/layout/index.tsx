import Header from "./Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
