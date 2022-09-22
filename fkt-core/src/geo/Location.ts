import { Address } from "./Address";
import { Coordinates } from "./Coordinates";
import { Geohash } from "./Geohash";

/**
 * A physical location.
 */
export class Location {
	/**
	 * Address of this location.
	 */
	public address?: Address;

	/**
	 * UTM coordinates of this location.
	 */
	public coordinates?: Coordinates;

	/**
	 * Geohash for this location.
	 */
	public geohash?: Geohash;
}
