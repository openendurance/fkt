import { IOrganization } from "IOrganization";
import { Links } from "Links";
import { Telephone } from "Telephone";
import { FktObject } from "./FktObject";

/**
 * A club.
 */
export abstract class Club<T> extends FktObject<T> implements IOrganization {
	/**
	 * Email address.
	 */
	public email?: string;

	/**
	 * Social media and website links.
	 */
	public links: Links;

	/**
	 * Club location.
	 */
	public location?: Location;

	/**
	 * Telephone number.
	 */
	public phone?: Telephone;
}
