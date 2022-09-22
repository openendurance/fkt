import { FktObject } from "./IFktObject";

/**
 * A running club.
 */
export interface IClub extends FktObject {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Telephone number.
	 */
	phone?: string;
}
