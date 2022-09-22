import { CovidStatus } from "CovidStatus";
import { EventActivity } from "EventActivity";
import { EventRecurrence } from "EventRecurrence";
import { IEvent } from "IEvent";
import { IOrganizer } from "IOrganizer";
import { Links } from "Links";

/**
 * A group event like a race, group run, etc.
 */
export interface IGroupEvent extends IEvent {
	/**
	 * The Covid status for the event.
	 */
	covid?: CovidStatus;

	/**
	 * Average group size.
	 */
	groupSize?: number[];

	/**
	 * true if this is a virtual event; otherwise, false.
	 */
	isVirtual: boolean;

	/**
	 * Website and social media links.
	 */
	links?: Links;

	/**
	 * The organizer(s) of the event.
	 */
	organizer?: IOrganizer[];

	/**
	 * Optional post-event events, e.g. food/drinks.
	 */
	postEvent?: EventActivity[];

	/**
	 * Optional pre-event events, e.g. food/drinks.
	 */
	preEvent?: EventActivity[];

	/**
	 * Frequency the event occurs.
	 */
	recurs: EventRecurrence;
}
