/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui({
			defaultTheme: "dark",
			layout: {
				disabledOpacity: "0.3", // opacity-[0.3]
				radius: {
					small: "2px", // rounded-small
					medium: "3px", // rounded-medium
					large: "4px", // rounded-large
				},
			},
		}),
	],
};
