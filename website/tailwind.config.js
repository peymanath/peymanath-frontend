/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./domain/**/*.{js,ts,jsx,tsx,mdx}",
		"./database/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily:{
			serif:["Ray"],
			sans:["Ray"],
			display:["Ray"],
			body:["Ray"],
			mono:["Ray"],
		},
		extend: {
			colors: {
				primary: "#10A19D",
			},
			boxShadow: {
				image: "20px 20px 70px rgba(76, 76, 76, 0.5)",
				icon: "4px 8px 17px rgba(0, 0, 0, 0.2)",
			},
		},
	},
	plugins: [],
};
