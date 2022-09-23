import { CovidStatus } from "CovidStatus";
import { EventActivity } from "EventActivity";
import { EventRecurrence } from "EventRecurrence";
import { IGroupEvent } from "IGroupEvent";
import { Organizer } from "Organizer";
import { Club } from "../Club";
import { Store } from "../Store";
import { GroupRunType } from "./GroupRunType";
import { Run } from "./Run";

/**
 * A group run.
 */
export class GroupRun<T> extends Run<T> implements IGroupEvent {
	/**
	 * The COVID-19 status for the event.
	 */
	public covid?: CovidStatus;

	/**
	 * Club affiliated with the run.
	 */
	public club?: Club<T>;

	/**
	 * Days the group run meets.
	 */
	public days: string[] = [];

	/**
	 * Average group size.
	 */
	public groupSize: number[] = [];

	/**
	 * true if this is a virtual event; otherwise, false.
	 */
	public isVirtual: boolean;

	/**
	 * The organizer(s) of the event.
	 */
	public organizer: Organizer[] = [];

	/**
	 * Optional post-event events, e.g. food/drinks.
	 */
	public postEvent: EventActivity[] = [];

	/**
	 * Optional pre-event events, e.g. food/drinks.
	 */
	public preEvent: EventActivity[] = [];

	/**
	 * Frequency the event occurs.
	 */
	public recurs: EventRecurrence;

	/**
	 * Store affiliated with the run.
	 */
	public store?: Store<T>;

	/**
	 * Run type, e.g. "social", etc.
	 */
	public type: GroupRunType[] = [];
}
