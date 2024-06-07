import { sveltekit } from "@sveltejs/kit/vite"
import AutoImport from "unplugin-auto-import/vite"
import Unfonts from "unplugin-fonts/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import TurboConsole from "unplugin-turbo-console/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [
		TurboConsole(),
		AutoImport({
			imports: [
				"svelte",
				"svelte/animate",
				"svelte/easing",
				"svelte/motion",
				"svelte/store",
				"svelte/transition",
			],
			resolvers: [
				IconsResolver({
					prefix: "Icon",
				}),
			],
		}),
		Icons({ autoInstall: true, compiler: "svelte" }),
		sveltekit(),
		Unfonts(),
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
})
