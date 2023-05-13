import { Metadata } from "next";

export const metadata: Metadata = { title: "صفحه اصلی" };

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-centerd justify-center text-center gap-10 h-[100vh] px-7 lg:px-20 ">
				<p className="flex flex-wrap gap-3 text-lg items-center justify-center font-semibold md:text-2xl lg:text-4xl">
					<span>توسعه دهنده فرانت اند</span>
					<span className="animate-color-text"> Next.Js | TypeScript</span>
				</p>
				<p className="">
					علاقمند به پیشرفت در فرانت اند هستم و دوست دارم روزی استارتاپ خودمو راه اندازی کنم :)
				</p>
			</div>
		</>
	);
}
