/*
 * File: /fkt/fkt-core/src/validation/schema/GrfObjectSchema.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import * as Yup from "yup";
import { IOeiObject } from "#fkt-core/IOeiObject";
import { ValidationExpressions } from "../ValidationExpressions";

// TODO: coordinates?

/**
 * Base validator for {@link IOeiObject} entities.
 */
export const OeiObjectSchema = Yup.object()
	.shape({
		address: Yup.string().label("Address").required().min(4).trim(),
		approvedAt: Yup.date().label("Approved at").notRequired(),
		approvedBy: Yup.string().label("Approved by").notRequired(),
		createdAt: Yup.date().label("Created at").notRequired(),
		createdBy: Yup.string().label("Created by").notRequired(),
		facebook: Yup.string().label("Facebook").notRequired().url().trim(),
		geohash: Yup.string().label("Geohash").length(6).notRequired(),
		id: Yup.string().label("Id").notRequired(),
		instagram: Yup.string().label("Instagram").notRequired().url().trim(),
		name: Yup.string().label("Name").required().min(3).matches(ValidationExpressions.NAME).trim(),
		owner: Yup.string().label("Owner").length(ValidationExpressions.USER_ID_LENGTH).notRequired(),
		status: Yup.string().notRequired(),
		statusReason: Yup.string().notRequired(),
		twitter: Yup.string().label("Twitter").notRequired().url().trim(),
		updatedAt: Yup.date().label("Updated at").notRequired(),
		updatedBy: Yup.string().label("Updated by").notRequired(),
		website: Yup.string().label("Website").notRequired().url().trim(),
	});
