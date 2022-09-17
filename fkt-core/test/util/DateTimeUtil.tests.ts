/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { DateTimeUtil } from "../../src/util/DateTimeUtil";

test("format null time string returns null", () => {
	expect(DateTimeUtil.tryFormatTimeString(null)).toBeNull();
});

test("format empty time string returns null", () => {
	expect(DateTimeUtil.tryFormatTimeString("")).toBeNull();
});

test("format time string succeeds", () => {
	expect(DateTimeUtil.tryFormatTimeString("12:00:00")).toStrictEqual("12:00 PM");
});
