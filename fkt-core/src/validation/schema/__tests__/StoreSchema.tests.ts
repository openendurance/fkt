/*
 * File: /fkt/fkt-core/src/validation/schema/__tests__/StoreSchema.tests.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { ValidationError } from "yup";
import { StoreSchema } from "../StoreSchema";
import { StoreFixtureFactory } from "../../../__fixtures__/StoreFixtureFactory";

const schema = StoreSchema;

describe("Store validation", () => {
	test("validation succeeds", async () => {
		const actual = StoreFixtureFactory.create();

		expect.assertions(1);

		await schema.validate(actual).then((valid) => expect(valid).toBe(actual));
	});

	test("empty validation fails", async () => {
		const actual = StoreFixtureFactory.empty();

		expect.assertions(2);

		await schema.validate(actual).catch((error) => {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error.errors).toHaveLength(1);
		});
	});

	describe("name", () => {
		test("empty name fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.name = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Name is a required field");
			});
		});

		test("short name fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.name = "PD";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Name must be at least 3 characters");
			});
		});

		test("all spaces for name fails", async () => {
			const actual = StoreFixtureFactory.create();
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
			const actual = StoreFixtureFactory.create();
			actual.address = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address is a required field");
			});
		});

		test("short address fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.address = "PD";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address must be at least 4 characters");
			});
		});

		test("all spaces for address fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.address = "     ";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Address is a required field");
			});
		});
	});

	describe("telephone", () => {
		test("empty telephone fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.phone = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Phone is a required field");
			});
		});

		test("short telephone fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.phone = "404-555";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Phone is invalid");
			});
		});

		test("all spaces for telephone fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.phone = "          ";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Phone is a required field");
			});
		});

		test("special characters for telephone fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.phone = "404$555x1212";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Phone is invalid");
			});
		});

		test("validation without - or . characters for telephone succeeds", async () => {
			const actual = StoreFixtureFactory.create();
			actual.phone = "4045551212";

			expect.assertions(1);

			await schema.validate(actual).then((valid) => {
				expect(valid).toBeTruthy();
			});
		});
	});

	describe("email", () => {
		test("empty email fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.email = "";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Email is a required field");
			});
		});

		test("short email fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.email = "a@b.c";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Email must be at least 6 characters");
			});
		});

		test("all spaces for email fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.email = "      ";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Email is a required field");
			});
		});
	});

	describe("social", () => {
		test("invalid facebook URL fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.facebook = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Facebook must be a valid URL");
			});
		});

		test("invalid instagram URL fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.instagram = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Instagram must be a valid URL");
			});
		});

		test("invalid twitter URL fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.twitter = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Twitter must be a valid URL");
			});
		});

		test("invalid website URL fails", async () => {
			const actual = StoreFixtureFactory.create();
			actual.website = "http://porter";

			expect.assertions(3);

			await schema.validate(actual).catch((error) => {
				expect(error).toBeInstanceOf(ValidationError);
				expect(error.errors).toHaveLength(1);
				expect(error.errors[0]).toMatch("Website must be a valid URL");
			});
		});
	});
});
