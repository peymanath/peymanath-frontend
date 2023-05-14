"use client";
import {MenuListType} from "TYPES/domain/Header";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {MenuLineHorizontal, RemoveThin} from "react-huge-icons/outline";

export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);
    const pathName = usePathname();
    useEffect(() => {
        setShowMenu(false);
    }, [pathName]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const menuList: MenuListType[] = [
        {
            id: 1,
            title: "خانه",
            url: "/",
        },
        {
            id: 2,
            title: "مهارت ها",
            url: "/skills",
        },
        {
            id: 3,
            title: "پروژه ها",
            url: "/project",
        },
    ];

    return (
        <>
            <div
                className={`w-full fixed top-0 z-[99999] py-2${scrollY >= 100 ? " bg-black/50 border border-gray-500/10 backdrop-blur-sm md:py-5" : " md:py-10"}`}>

                {scrollY >= 100 && <div
                    className="absolute w-full h-full inset-0 bg-body bg-left bg-no-repeat opacity-60 -z-10"></div>}

                <div className="container flex items-center justify-between">
                    <div className="md:hidden">
                        <MenuLineHorizontal
                            className="w-12 h-12"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                    <div className="hidden md:flex">
                        <nav>
                            <ul className="flex items-center gap-5">
                                {menuList.map(({id, title, url}: MenuListType) => (
                                    <li key={id}>
                                        <Link href={url}
                                              className={`text-lg animate-color-text-hover${pathName == url ? " animate-color-text" : ""}`}>
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="hidden md:flex text-lg lg:text-xl">Peyman Naderi</p>
                        <Image
                            width="64"
                            height="24"
                            src="/assets/images/color-logo.png"
                            alt="Peyman ATH Logo"
                            className="w-12"
                        />
                    </div>
                </div>
            </div>
            <div
                className={`fixed flex-col top-1.5 right-[5.2%] min-w-[200px]  bg-black/50 border border-gray-500/10 backdrop-blur-sm rounded-lg z-[99999] ${
                    showMenu ? "flex" : "hidden"
                }`}>
                <div className="flex w-full">
                    <RemoveThin
                        className="w-12 h-12"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
                <nav>
                    <ul className="flex flex-col gap-5 p-3">
                        {menuList.map(({id, title, url}: MenuListType) => (
                            <li key={id}>
                                <Link href={url}
                                      className={`text-lg animate-color-text-hover${pathName == url ? " animate-color-text" : ""}`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
