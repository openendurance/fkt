/*
 * File: /fkt/fkt-core/src/validation/schema/StoreSchema.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import * as Yup from "yup";
import { IStore } from "#fkt-core/IStore";
import { ValidationExpressions } from "../ValidationExpressions";
import { OeiObjectSchema } from "./OeiObjectSchema";

/**
 * Validator for {@link IStore} entities.
 */
export const StoreSchema = Yup.object()
	.shape({
		email: Yup.string().label("Email").required().email().min(6).trim(),
		facebook: Yup.string().label("Facebook").notRequired().url().trim(),
		instagram: Yup.string().label("Instagram").notRequired().url().trim(),
		phone: Yup.string().label("Phone").required().matches(ValidationExpressions.PHONE, "Phone is invalid").trim(),
		twitter: Yup.string().label("Twitter").notRequired().url().trim(),
		website: Yup.string().label("Website").notRequired().url().trim(),
	})
	.concat<any>(OeiObjectSchema);
