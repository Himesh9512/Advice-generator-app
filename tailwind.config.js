/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"cyan-light": "#cee3e9",
					"neon-green": "#52ffa8",
				},
				secondary: {
					"grayish-blue": {
						default: "#4e5d73",
						dark: "#323a49",
					},
					"dark-blue": "#1f2632",
				},
			},
			fontSize: {
				ctm: "28px",
			},
			fontFamily: {
				Manrope: "Manrope",
			},
			boxShadow: {
				custom: "0 0 20px 5px #52ffa8",
			},
		},
	},
	plugins: [],
};
