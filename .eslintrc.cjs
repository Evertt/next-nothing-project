module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "import", "unused-imports"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: {
					// Specify a parser for each lang.
					ts: "@typescript-eslint/parser",
					js: "espree",
					typescript: "@typescript-eslint/parser",
				},
			},
		},
	],
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
				],
				pathGroups: [
					{
						pattern: "$/**",
						group: "internal",
						position: "after",
					},
					{
						pattern: "glob",
						group: "builtin",
					},
				],
				// pathGroupsExcludedImportTypes: ["builtin"],
				alphabetize: {
					order: "asc",
				},
			},
		],
		"sort-imports": [
			"error",
			{
				allowSeparatedGroups: true,
				ignoreDeclarationSort: true,
			},
		],
		"no-duplicate-imports": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 0,
			},
		],
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
		"no-undef": "off",
		// no-undef has been turned off because of this:
		// basically, it causes issues and TS does those checks so it's redundant
		// https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
	},
	settings: {
		"import/internal-regex": "^\\$",
	},
}
