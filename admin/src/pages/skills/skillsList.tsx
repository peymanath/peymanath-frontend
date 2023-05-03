interface SkillsListItem {
	id: number;
	titleFa: string;
	titleEn: string;
	descriptin: string;
	imageUrl: string;
	metaData: {
		recommmendations: number;
		project: number;
	};
}

export const SkillsList: SkillsListItem[] = [
	{
		id: 1,
		titleFa: "اچ تی ام ال",
		titleEn: "HTML5",
		descriptin: "زبان نشانه گذاری برای وب",
		imageUrl: "html.svg",
		metaData: {
			recommmendations: 16347,
			project: 546,
		},
	},
	{
		id: 2,
		titleFa: "سی اس اس",
		titleEn: "Css3",
		descriptin: "زبان نشانه گذاری برای وب",
		imageUrl: "css.png",
		metaData: {
			recommmendations: 16347,
			project: 546,
		},
	},
	{
		id: 3,
		titleFa: "جاوااسکریپت",
		titleEn: "Javascript",
		descriptin: "زبان برنامه نویسی",
		imageUrl: "javascript.png",
		metaData: {
			recommmendations: 167,
			project: 56,
		},
	},
	{
		id: 4,
		titleFa: "تایپ اسکریپت",
		titleEn: "Typescript",
		descriptin: "زبان برنامه نویسی | همان جاوااسکریپت میباشد اما با قابلیت کنترل تایپ ها",
		imageUrl: "typescript.png",
		metaData: {
			recommmendations: 167,
			project: 56,
		},
	},
	{
		id: 5,
		titleFa: "ری اکت جی اس",
		titleEn: "React.js",
		descriptin: "یک کتابخانه خیلی قوی از جاوااسکریپت",
		imageUrl: "react.png",
		metaData: {
			recommmendations: 167,
			project: 56,
		},
	},
	{
		id: 6,
		titleFa: "نکست جی اس",
		titleEn: "Next.js",
		descriptin: "کتابخانه بر گرفته شده از ری اکت برای رفع ایرادات ری اکت",
		imageUrl: "next-js.png",
		metaData: {
			recommmendations: 167,
			project: 56,
		},
	},
];
