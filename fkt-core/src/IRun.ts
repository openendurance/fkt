/*
 * File: /fkt/fkt-core/src/IRun.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { IClub, IOeiObject, IOrganizer, IStore } from ".";

/**
 * A group run.
 */
export interface IRun extends IOeiObject {
	/**
	 * Summary `IClub` info.
	 */
	clubInfo?: IClub | null;

	/**
	 * The COVID-19 status for the run.
	 */
	covid?: string;

	/**
	 * Days the group run meets.
	 */
	days?: string[];

	/**
	 * Run difficulty.
	 */
	difficulty?: string[];

	/**
	 * Run distance.
	 */
	distance?: string[];

	/**
	 * Optional end date. Should be set to **startDate** for one-time events.
	 */
	endDate?: Date | null;

	/**
	 * Average group size.
	 */
	groupSize?: string[];

	/**
	 * Meetup.com URL.
	 */
	meetup?: string;

	/**
	 * Run metadata.
	 */
	meta?: string[];

	/**
	 * Notes about the event.
	 */
	notes?: string;

	/**
	 * The `IOrganizer` for the event.
	 */
	organizer?: IOrganizer | null;

	/**
	 * Optional post run events, e.g. food/drinks.
	 */
	postRunEvent?: string[];

	/**
	 * Date the group run was established.
	 */
	startDate?: Date | null;

	/**
	 * Summary `IStore` info.
	 */
	storeInfo?: IStore | null;

	/**
	 * Group's Strava URL.
	 */
	strava?: string;

	/**
	 * Run surface type(s).
	 */
	surface?: string[];

	/**
	 * Run type, e.g. "social", etc.
	 */
	type?: string[];

	/**
	 * Average gain for the run.
	 */
	vert?: string[];
}
