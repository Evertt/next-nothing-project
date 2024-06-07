import fs from "fs"
import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import glob from "glob"

const srcDir = "./src"

const folders = glob.sync("*", { cwd: srcDir })

const aliases = {}

folders.forEach((folder) => {
	const folderPath = `${srcDir}/${folder}`
	if (fs.lstatSync(folderPath).isDirectory()) {
		aliases[`$${folder}`] = folderPath

		// if (folder === "routes") {
		// 	const routesAliases = {}
		// 	glob.sync("**/*", { cwd: folderPath, nodir: true }).forEach((file) => {
		// 		const filePath = file.replace(/\/\(.*?\)/g, "/")
		// 		const aliasPath = filePath
		// 			.replace(/^\/?/, "")
		// 			.replace(/^([^/]+)\//, "")
		// 			.replace(/\/+/g, "/")
		// 		// console.log(`${folderPath}/${filePath} => $routes/${aliasPath}`)
		// 		routesAliases[`$routes/${aliasPath}`] = `${folderPath}/${file}`
		// 	})
		// 	Object.assign(aliases, routesAliases)
		// } else {
		// 	aliases[`$${folder}`] = folderPath
		// }
	}
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: { ...aliases, "$/*": "./src/*" },
	},
	preprocess: vitePreprocess(),
}

export default config
