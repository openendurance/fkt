import { Difficulty } from "Difficulty";
import { Distance } from "Distance";
import { SurfaceType } from "SurfaceType";

/**
 * An event profile, e.g. difficulty, distance, and so on.
 */
export class EventProfile {
	/**
	 * Difficulty.
	 */
	public difficulty: Difficulty;

	/**
	 * Distance.
	 */
	public distance: Distance;

	/**
	 * Surface type(s).
	 */
	public surface: SurfaceType[];

	/**
	 * Average gain.
	 */
	public vert: Distance;
}
