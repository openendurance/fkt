import { IFktObject } from "./IFktObject";

/**
 * A running club.
 */
export interface IClub extends IFktObject {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Telephone number.
	 */
	phone?: string;
}
