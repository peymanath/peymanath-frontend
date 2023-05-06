module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/index.html"],
	theme: {
		fontFamily: {
			serif: ["IRANSansXFaNum"],
			sans: ["IRANSansXFaNum"],
			display: ["IRANSansXFaNum"],
			body: ["IRANSansXFaNum"],
			mono: ["IRANSansXFaNum"],
		},
		extend: {
			colors: {
				primary: "#ff6d00",
				secondary: "#3c096c",
			},
			boxShadow: {
				image: "20px 20px 70px rgba(76, 76, 76, 0.5)",
				icon: "4px 8px 17px rgba(0, 0, 0, 0.2)",
				buttonPrimary: "0 0 14px 0px #ff5d0073",
			},
			backgroundImage: {
				"hero-section": 'url("/public/image/back-square.svg")',
				checked: 'url("/public/image/check-input.svg")',
			},
		},
	},
	plugins: [],
};
