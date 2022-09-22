// TODO: how to handle URLs for virtual events?

import { Location } from "geo/Location";
import { OeiEventProfile } from "OeiEventProfile";
import { Photo } from "Photo";

/**
 * An event like a run, ride, FKT attempt, etc.
 */
export interface IOeiEvent {
	/**
	 * Optional end date/time.
	 */
	endDate: Date | null;

	/**
	 * Event location. undefined for virtual events.
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
	profile: OeiEventProfile[];

	/**
	 * Start date/time of the run.
	 */
	startDate: Date | null;
}
