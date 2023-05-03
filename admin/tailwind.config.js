module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}","./public/index.html"],
	theme: {
		fontFamily: {
			serif: ["Ray"],
			sans: ["Ray"],
			display: ["Ray"],
			body: ["Ray"],
			mono: ["Ray"],
		},
		extend: {
			colors: {
				primary: "#113CFC",
				primaryDark: "#193498",
				secondary: "#69DADB",
			},
			boxShadow: {
				image: "20px 20px 70px rgba(76, 76, 76, 0.5)",
				icon: "4px 8px 17px rgba(0, 0, 0, 0.2)",
			},
			backgroundImage: {
				"hero-section": 'url("/public/image/back-square.svg")',
				checked: 'url("/public/image/check-input.svg")',
			},
		},
	},
	plugins: [],
};
