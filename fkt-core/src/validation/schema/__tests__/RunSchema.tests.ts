/*
 * File: /fkt/fkt-core/src/validation/schema/__tests__/RunSchema.tests.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { ValidationError } from "yup";
import { RunSchema } from "../RunSchema";
import { RunFixtureFactory } from "../../../__fixtures__/RunFixtureFactory";
import { IRun } from "../../..";

const schema = RunSchema;

describe("Run validation", () => {
	test("validation succeeds", async () => {
		const actual = RunFixtureFactory.create();

		expect.assertions(1);

		await schema.validate(actual).then((valid) => expect(valid).toBe(actual));
	});

	test("empty validation fails", async () => {
		const actual = RunFixtureFactory.empty();

		expect.assertions(2);

		await schema.validate(actual).catch((error) => {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error.errors).toHaveLength(1);
		});
	});

	describe("name", () => {
		test("empty name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.name = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Name is a required field");
			});
		});

		test("short name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.name = "PD";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Name must be at least 3 characters");
			});
		});

		test("all spaces for name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.name = "    ";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Name is a required field");
			});
		});
	});

	describe("address", () => {
		test("empty address fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.address = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address is a required field");
			});
		});

		test("short address fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.address = "PD";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address must be at least 4 characters");
			});
		});

		test("all spaces for address fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.address = "     ";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address is a required field");
			});
		});
	});

	describe("social", () => {
		test("invalid facebook URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.facebook = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Facebook must be a valid URL");
			});
		});

		test("invalid instagram URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.instagram = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Instagram must be a valid URL");
			});
		});

		test("invalid twitter URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.twitter = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Twitter must be a valid URL");
			});
		});

		test("invalid website URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.website = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Website must be a valid URL");
			});
		});

		test("invalid meetup URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.meetup = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Meetup must be a valid URL");
			});
		});

		test("invalid strava URL fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.strava = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Strava must be a valid URL");
			});
		});
	});

	describe("club info", () => {
		test("invalid club info fails", async () => {
			const actual: Partial<IRun> = RunFixtureFactory.create();
			actual.clubInfo = {
				name: "",
			};

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("no club info succeeds", async () => {
			const actual: Partial<IRun> = RunFixtureFactory.create();
			delete actual.clubInfo;

			expect.assertions(1);

			await schema.validate(actual).then((valid) => expect(valid).toBe(actual));
		})
	});

	describe("organizer", () => {
		test("invalid organizer fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.organizer = {
				email: "",
				name: "",
				phone: "",
				type: ""
			};

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("store info", () => {
		test("invalid store info fails", async () => {
			const actual: Partial<IRun> = RunFixtureFactory.create();
			actual.storeInfo = {
				name: "",
			};

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("no store info succeeds", async () => {
			const actual: Partial<IRun> = RunFixtureFactory.create();
			delete actual.storeInfo;

			expect.assertions(1);

			await schema.validate(actual).then((valid) => expect(valid).toBe(actual));
		})
	});

	describe("end date", () => {
		test("invalid end date fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.endDate = new Date("1975-05-07");

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toContain("End date should be on or after");
			});
		});
	});

	describe("covid", () => {
		test("invalid covid status fails", async () => {
			const actual: Partial<IRun> = RunFixtureFactory.create();
			actual.covid = "covid_is_fake_news";

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("days", () => {
		test("invalid day name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.days = ["blurmsday"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of days fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.days = ["monday", "monday", "monday", "monday", "monday", "monday", "monday", "monday"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("difficulty", () => {
		test("invalid difficulty name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.difficulty = ["cat"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of difficulties fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.difficulty = ["sexy", "sexy", "sexy", "sexy", "sexy", "sexy"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("distance", () => {
		test("invalid distance name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.distance = ["cat"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of distances fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.distance = ["loop", "loop", "loop", "loop", "loop", "loop", "loop", "loop"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("group size", () => {
		test("invalid groupSize name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.groupSize = ["cat"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of group sizes fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.groupSize = ["0-10", "0-10", "0-10", "0-10", "0-10"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("meta", () => {
		test("invalid meta name fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.meta = ["cats_okay"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of meta fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.meta = [
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
				"dogs_okay",
			];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("post run event", () => {
		test("invalid post run event fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.postRunEvent = ["cat_talk"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of post run events fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.postRunEvent = ["food", "food", "food", "food", "food", "food"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("surface", () => {
		test("invalid surface fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.surface = ["cat_tails"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of surfaces fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.surface = ["trail", "trail", "trail", "trail", "trail", "trail"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("type", () => {
		test("invalid type fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.type = ["unsocial"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of types fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.type = ["social", "social", "social", "social", "social", "social"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});

	describe("vert", () => {
		test("invalid vert fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.vert = ["unsocial"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});

		test("invalid number of vert fails", async () => {
			const actual = RunFixtureFactory.create();
			actual.vert = ["0", "0", "0", "0", "0", "0"];

			expect.assertions(2);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
			});
		});
	});
});
