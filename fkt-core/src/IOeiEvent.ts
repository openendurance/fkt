import { Difficulty } from "Difficulty";
import { Location } from "geo/Location";
import { Photo } from "Photo";
import { SurfaceType } from "SurfaceType";

/**
 * An event like a run, ride, FKT attempt, etc.
 */
export interface IOeiEvent {
	/**
	 * Difficulty.
	 */
	difficulty?: Difficulty[];

	/**
	 * Distance(s).
	 */
	distance?: string[];

	/**
	 * Optional end date/time.
	 */
	endDate?: Date | null;

	/**
	 * Event location. undefined for virtual events.
	 */
	location?: Location; // TODO: how to handle URLs for virtual events?

	/**
	 * Event metadata.
	 */
	eventMeta?: string[]; // TODO: make this key/value pairs; rel to db meta?

	/**
	 * Notes about the event.
	 */
	notes?: string;

	/**
	 * Photos associated with this event.
	 */
	photos?: Photo[];

	/**
	 * Start date/time of the run.
	 */
	startDate?: Date | null;

	/**
	 * Run surface type(s).
	 */
	surface?: SurfaceType[];

	/**
	 * Average gain for the event.
	 */
	vert?: number[]; // TODO: fix this; class, units? How to correlate with distance? Profile class?
}
