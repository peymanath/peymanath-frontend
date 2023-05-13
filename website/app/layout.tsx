import "Public/style/globals.css";
import type { Metadata } from "next";
import Header from "DOMAIN/Header";
import Footer from "DOMAIN/Footer";
export const metadata: Metadata = {
	viewport:
		"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
	icons: "image/favicon.png",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fa-IR" dir="rtl">
			<body className="bg-black text-white font-thin">
				<Header />

				<div className="fixed w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-70 -z-[99999]"></div>

				<main>{children}</main>

				<Footer />
			</body>
		</html>
	);
}
