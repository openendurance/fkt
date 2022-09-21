import { ICoordinates } from "./ICoordinates";

/**
 * A physical location.
 */
export interface ILocation {
	/**
	 * Street address.
	 */
	address?: string;

	/**
	 * The UTM {@link ICoordinates} for this location.
	 */
	coordinates?: ICoordinates;

	/**
	 * Geohash for this location.
	 */
	geohash?: string;

	/**
	 * Location name.
	 */
	name: string;
}
