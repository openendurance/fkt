import { Difficulty } from "Difficulty";
import { IOeiEvent } from "IOeiEvent";
import { SurfaceType } from "SurfaceType";
import { OeiObject } from "../OeiObject";

/**
 * A run.
 */
export class Run<T> extends OeiObject<T> implements IOeiEvent {
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
	public endDate?: Date | null;

	/**
	 * Event metadata.
	 */
	public eventMeta?: string[];

	/**
	 * Notes about the event.
	 */
	public notes?: string;

	/**
	 * Start date/time of the run.
	 */
	public startDate?: Date | null;

	/**
	 * Run surface type(s).
	 */
	public surface?: SurfaceType[];

	/**
	 * Average gain for the run.
	 */
	public vert?: string[]; // TODO: fix this; class, units?
}
