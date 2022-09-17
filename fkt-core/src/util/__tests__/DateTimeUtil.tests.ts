/*
 * File: /fkt/fkt-core/src/util/__tests__/DateTimeUtil.tests.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { DateTimeUtil } from "../DateTimeUtil";

test("format null time string returns null", () => {
	expect(DateTimeUtil.tryFormatTimeString(null)).toBeNull();
});

test("format empty time string returns null", () => {
	expect(DateTimeUtil.tryFormatTimeString("")).toBeNull();
});

test("format time string succeeds", () => {
	expect(DateTimeUtil.tryFormatTimeString("12:00:00")).toStrictEqual("12:00 PM");
});
