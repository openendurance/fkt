/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { Config } from "jest";

const config: Config = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["__fixtures__", ".wip", "dist", "node_modules"],
	projects: ["<rootDir>"],
	testRegex: "(test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	transform: {
		"^.+\\.(t|j)sx?$": "ts-jest"
	},
	verbose: true
};

export default config;
