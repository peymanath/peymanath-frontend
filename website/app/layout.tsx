"use client"
import "STYLE/globals.css";
import type {Metadata} from "next";
import Header from "DOMAIN/Header";
import Footer from "DOMAIN/Footer";
import Next13NProgress from 'next13-nprogress';
import type {ReactNode} from "react";

export const metadata: Metadata = {
    viewport:
        "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    icons: "images/favicon.png",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="fa-IR" dir="rtl">
        <body className="bg-black text-white">
        <Header/>

        <Next13NProgress color="var(--primary)" options={{showSpinner: false}}/>

        <div className="fixed w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-30 -z-[99999]"></div>

        <main>{children}</main>

        <Footer/>
        </body>
        </html>
    );
}
