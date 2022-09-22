import "../../src/extensions/String.extensions";

test("format empty time string returns null", () => {
	expect("".tryFormatTimeString()).toBeNull();
});

test("format time string succeeds", () => {

	const t = "12:00:00".tryFormatTimeString();
	console.log(t);

	expect("12:00:00".tryFormatTimeString()).toStrictEqual("12:00 PM");
});

// import { DateTimeUtil } from "../../src/extensions/Date.extensions";

// test("format empty time string returns null", () => {
// 	expect(DateTimeUtil.tryFormatTimeString("")).toBeNull();
// });

// test("format time string succeeds", () => {
// 	expect(DateTimeUtil.tryFormatTimeString("12:00:00")).toStrictEqual("12:00 PM");
// });
