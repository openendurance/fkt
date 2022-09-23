import "../../src/extensions/String.extensions";

test("format empty time string returns null", () => {
	expect(new String().formatAsFixedEpochTimeString()).toBeNull();
});

test("format time string succeeds", () => {
	expect("12:00:00".formatAsFixedEpochTimeString()).toStrictEqual("12:00 PM");
});
