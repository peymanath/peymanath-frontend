import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />
			<div className="md:pr-72 p-3">
				<Header />

				<main className="pt-7">{children}</main>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					transition={Slide}
					rtl={true}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</>
	);
}
export default React.memo(Layout);
