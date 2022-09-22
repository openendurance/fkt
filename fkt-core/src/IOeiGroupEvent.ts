import { CovidStatus } from "CovidStatus";
import { IOeiEvent } from "IOeiEvent";
import { IOrganizer } from "IOrganizer";
import { Links } from "Links";

// TODO: sort out recurring
// TODO: make pre/post enums?

/**
 * A group event like a race, group run, etc.
 */
export interface IOeiGroupEvent extends IOeiEvent {
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
	postEvent?: string[];

	/**
	 * Optional pre-event events, e.g. food/drinks.
	 */
	preEvent?: string[];
}
