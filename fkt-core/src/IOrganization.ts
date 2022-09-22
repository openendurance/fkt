import { Telephone } from "Telephone";

/**
 * An organization.
 */
export interface IOrganization {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Organization physical location, if any.
	 */
	location?: Location;

	/**
	 * Telephone number.
	 */
	phone?: Telephone;
}
