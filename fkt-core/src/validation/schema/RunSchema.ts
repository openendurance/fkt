/*
 * File: /fkt/fkt-core/src/validation/schema/RunSchema.ts
 * Created Date: Saturday, 31st October 2020 12:11:02 pm
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

// import { IClub, ICoordinates, IOrganizer, IRun, IStore } from "#fkt-core/.";
import { IRun } from "#fkt-core/.";
import { ValidationExpressions } from "../ValidationExpressions";
import * as Yup from "yup";
import { OeiObjectSchema } from "./OeiObjectSchema";

/**
 * Validator for {@link IRun} entities.
 */
export const RunSchema = Yup.object()
	.shape({
		clubInfo: Yup.object()
			.shape({
				address: Yup.string().label("Address").required().min(4).trim(),
				coordinates: Yup.object()
					.shape({ latitude: Yup.number().required(), longitude: Yup.number().required() })
					.notRequired(),
				email: Yup.string().label("Email").notRequired().email().min(6).trim(),
				id: Yup.string().label("Id").required(),
				name: Yup.string().label("Name").required().min(3).matches(ValidationExpressions.NAME).trim(),
				phone: Yup.string()
					.label("Phone")
					.notRequired()
					.matches(ValidationExpressions.PHONE, "Phone is invalid")
					.trim(),
			})
			.label("Club info")
			.notRequired()
			.nullable()
			.default(undefined),
		covid: Yup.string().label("Covid").notRequired().oneOf(["on_hold", "mask", "distanced", "mask_distanced"]),
		days: Yup.array()
			.of(Yup.string().oneOf(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]))
			.label("Days")
			.max(7)
			.required(),
		difficulty: Yup.array()
			.of(Yup.string().oneOf(["sexy", "easy", "intermediate", "hard", "insane"]))
			.label("Difficulty")
			.max(5)
			.notRequired(),
		distance: Yup.array()
			.of(Yup.string().oneOf(["loop", "1M", "5K", "8K", "10K", "21K", "other"]))
			.label("Distance")
			.max(7)
			.notRequired(),
		endDate: Yup.date()
			.label("End date")
			.notRequired()
			.min(Yup.ref("startDate"), "End date should be on or after start date")
			.typeError("End date must be a valid date")
			.nullable(),
		groupSize: Yup.array()
			.of(Yup.string().oneOf(["0-10", "11-25", "26-50", "51+"]))
			.max(4)
			.notRequired(),
		meetup: Yup.string().label("Meetup").notRequired().url().trim(),
		meta: Yup.array()
			.of(
				Yup.string().oneOf([
					"adaptive",
					"dogs_okay",
					"ladies_only",
					"kids_okay",
					"new",
					"no_drop",
					"rain_or_shine",
					"sober",
					"walkers_okay",
					"virtual",
				])
			)
			.label("Meta")
			.max(10)
			.notRequired(),
		notes: Yup.string().label("Notes").notRequired(),
		organizer: Yup.object().shape({
			name: Yup.string().label("Name").required().min(3).matches(ValidationExpressions.NAME).trim(),
			email: Yup.string().label("Email").required().email().min(6).trim(),
			phone: Yup.string()
				.label("Phone")
				.notRequired()
				.matches(ValidationExpressions.PHONE, "Phone is invalid")
				.trim(),
		}),
		photos: Yup.array().of(Yup.string().url()).label("Photos").notRequired(),
		postRunEvent: Yup.array()
			.of(Yup.string().oneOf(["food", "presentation", "demo", "discussion", "other"]))
			.label("Post run event")
			.max(5)
			.notRequired(),
		startDate: Yup.date().label("Start date").required().typeError("Start date must be a valid date"),
		storeInfo: Yup.object()
			.shape({
				address: Yup.string().required().min(4).trim(),
				coordinates: Yup.object()
					.shape({ latitude: Yup.number().required(), longitude: Yup.number().required() })
					.notRequired(),
				email: Yup.string().notRequired().email().min(6).trim(),
				id: Yup.string().required(),
				name: Yup.string().required().min(3).matches(ValidationExpressions.NAME).trim(),
				phone: Yup.string()
					.label("Phone")
					.notRequired()
					.matches(ValidationExpressions.PHONE, "Phone is invalid")
					.trim(),
			})
			.label("Store info")
			.notRequired()
			.nullable()
			.default(undefined),
		strava: Yup.string().label("Strava").notRequired().url().trim(),
		surface: Yup.array()
			.of(Yup.string().oneOf(["gravel", "road", "track", "trail", "other"]))
			.label("Surface")
			.max(5)
			.notRequired(),
		type: Yup.array()
			.of(Yup.string().oneOf(["social", "speedwork", "structured", "other"]))
			.label("Type")
			.max(4)
			.notRequired(),
		vert: Yup.array()
			.of(Yup.string().oneOf(["0", "1-150", "151-300", "301-1500", "1500+"]))
			.label("Vert")
			.max(5)
			.notRequired(),
	})
	.concat<any>(OeiObjectSchema);
