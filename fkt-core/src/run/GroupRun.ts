import { CovidStatus } from "CovidStatus";
import { Coordinates } from "geo/Coordinates";
import { Geohash } from "geo/Geohash";
import { IOeiGroupEvent } from "IOeiGroupEvent";
import { IOrganizer } from "IOrganizer";
import { Club } from "../Club";
import { Store } from "../Store";
import { GroupRunType } from "./GroupRunType";
import { Run } from "./Run";

/**
 * A group run.
 */
export class GroupRun<T> extends Run<T> implements IOeiGroupEvent {
	/**
	 * The COVID-19 status for the event.
	 */
	public covid?: CovidStatus | undefined;

	/**
	 * UTM coordinates of this location.
	 */
	public coordinates?: Coordinates | undefined;

	/**
	 * Club affiliated with the run.
	 */
	public club?: Club<T> | null;

	/**
	 * Days the group run meets.
	 */
	public days?: string[];

	/**
	 * Geohash for this location.
	 */
	public geohash?: Geohash | undefined;

	/**
	 * Average group size.
	 */
	public groupSize?: number[];

	/**
	 * true if this is a virtual event; otherwise, false.
	 */
	public isVirtual: boolean;

	/**
	 * The organizer(s) of the event.
	 */
	public organizer?: IOrganizer[] | undefined;

	/**
	 * Optional post run events, e.g. food/drinks.
	 */
	public postRunEvent?: string[];

	/**
	 * Store affiliated with the run.
	 */
	public store?: Store<T> | null;

	/**
	 * Run type, e.g. "social", etc.
	 */
	public type?: GroupRunType[];
}
