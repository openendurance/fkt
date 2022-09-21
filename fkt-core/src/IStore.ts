import { IFktObject } from "./IFktObject";

/**
 * A running store.
 */
export interface IStore extends IFktObject {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Telephone number.
	 */
	phone?: string;
}
