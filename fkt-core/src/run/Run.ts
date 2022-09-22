import { Difficulty } from "Difficulty";
import { EventProfile } from "EventProfile";
import { Location } from "geo/Location";
import { IEvent } from "IEvent";
import { Photo } from "Photo";
import { SurfaceType } from "SurfaceType";
import { OeiObject } from "../OeiObject";

/**
 * A run.
 */
export class Run<T> extends OeiObject<T> implements IEvent {
	/**
	 * Difficulty.
	 */
	public difficulty?: Difficulty[];

	/**
	 * Distance(s).
	 */
	public distance?: string[];

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
	public photos?: Photo[] | undefined;

	/**
	 * Event profile.
	 *
	 * Use multiple profiles for events that have multiple distance options.
	 */
	public profile: EventProfile[];

	/**
	 * Start date/time of the run.
	 */
	public startDate: Date | null;

	/**
	 * Run surface type(s).
	 */
	public surface?: SurfaceType[];

	/**
	 * Average gain for the run.
	 */
	public vert?: number[];
}
