import { EventProfile } from "EventProfile";
import { Location } from "geo/Location";
import { IEvent } from "IEvent";
import { Photo } from "Photo";
import { OeiObject } from "../OeiObject";

/**
 * A run.
 */
export class Run<T> extends OeiObject<T> implements IEvent {
	/**
	 * Optional end date/time.
	 */
	public endDate: Date | null;

	/**
	 * Event metadata.
	 */
	public eventMeta?: { [key: string]: unknown };

	/**
	 * Event location. undefined for virtual events.
	 */
	public location: Location;

	/**
	 * Notes about the event.
	 */
	public notes?: string;

	/**
	 * Photos associated with this event.
	 */
	public photos?: Photo[] = [];

	/**
	 * Event profile.
	 *
	 * Use multiple profiles for events that have multiple distance options.
	 */
	public profile: EventProfile[] = [];

	/**
	 * Start date/time of the run.
	 */
	public startDate: Date | null;
}
