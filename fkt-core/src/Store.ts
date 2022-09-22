import { IOrganization } from "IOrganization";
import { Links } from "Links";
import { Telephone } from "Telephone";
import { FktObject } from "./FktObject";

/**
 * A retail store.
 */
export abstract class Store<T> extends FktObject<T> implements IOrganization {
	/**
	 * Email address.
	 */
	public email?: string;

	/**
	 * Social media and website links.
	 */
	public links: Links;

	/**
	 * Store location.
	 */
	public location?: Location;

	/**
	 * Telephone number.
	 */
	public phone?: Telephone;
}
