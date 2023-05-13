import { Metadata } from "next";
import { DirectionDownDouble } from "react-huge-icons/outline";

export const metadata: Metadata = { title: "صفحه اصلی" };

export default function Home() {
	return (
		<>
			<div className="relative flex flex-col items-centerd justify-center text-center gap-10 h-[100vh] px-7 lg:px-20 ">
				<p className="flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl">
					<span>توسعه دهنده فرانت اند</span>
					<span className="animate-color-text"> Next.Js | TypeScript</span>
				</p>
				<p className="font-thin leading-7">
					علاقمند به پیشرفت در فرانت اند هستم و دوست دارم روزی استارتاپ خودمو
					راه اندازی کنم :)
				</p>
				<span className="absolute bottom-10 right-1/2 translate-x-1/2 z-[999]">
					<DirectionDownDouble className="w-10 h-10 animate-bounce opacity-75" />
				</span>
			</div>
		</>
	);
}
