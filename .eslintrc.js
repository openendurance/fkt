/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const path = require("path");
const packages = require("./package.json").workspaces.packages;

module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.eslint.json", ...packages.map((pkg) => `./${pkg}/tsconfig.json`)],
	},
	ignorePatterns: [
		"dist",
		"test",
		".eslintrc.js",
		"jest.config.ts"
	],
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/strict-boolean-expressions": [
			2,
			{
				allowString: false,
				allowNumber: false,
			},
		],
	},
};
