import { IClub } from "./IClub";
import { FktObject } from "./IFktObject";
import { IOrganizer } from "./IOrganizer";
import { Store } from "./IStore";

/**
 * A group run.
 */
export interface IRun extends FktObject {
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
	storeInfo?: Store | null;

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
