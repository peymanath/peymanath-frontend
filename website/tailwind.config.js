/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        fontFamily: {
            serif: ['IRANSansXFaNum'],
            sans: ['IRANSansXFaNum'],
            display: ['IRANSansXFaNum'],
            body: ['IRANSansXFaNum'],
            mono: ['IRANSansXFaNum'],
        },
        extend: {
            colors: {
                primary: '#ff6d00',
                secondary: '#3c096c',
            },
            boxShadow: {
                image: '20px 20px 70px rgba(76, 76, 76, 0.5)',
                icon: '4px 8px 17px rgba(0, 0, 0, 0.2)',
            },
            backgroundImage: {
                body: "url('/assets/images/body-color.svg')",
            },
        },
    },
    plugins: [],
};
