import { EventProfile } from "EventProfile";
import { Location } from "geo/Location";
import { Photo } from "Photo";

/**
 * An event like a run, ride, FKT attempt, etc.
 */
export interface IEvent {
	/**
	 * Optional end date/time.
	 */
	endDate: Date | null;

	/**
	 * Event location. undefined for virtual events, the website URL will
	 * generally refer to the location.
	 */
	location: Location;

	/**
	 * Event metadata.
	 */
	eventMeta?: { [key: string]: unknown };

	/**
	 * Notes about the event.
	 */
	notes?: string;

	/**
	 * Photos associated with this event.
	 */
	photos?: Photo[];

	/**
	 * Event profile.
	 *
	 * Use multiple profiles for events that have multiple distance options.
	 */
	profile: EventProfile[];

	/**
	 * Start date/time of the run.
	 */
	startDate: Date | null;
}
