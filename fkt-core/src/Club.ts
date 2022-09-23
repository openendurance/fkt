import { IOrganization } from "IOrganization";
import { Links } from "Links";
import { Telephone } from "Telephone";
import { OeiObject } from "./OeiObject";

/**
 * A club.
 */
export abstract class Club<T> extends OeiObject<T> implements IOrganization {
	/**
	 * Email address.
	 */
	public email: string;

	/**
	 * Social media and website links.
	 */
	public links: Links;

	/**
	 * Club location.
	 */
	public location: Location;

	/**
	 * Telephone number.
	 */
	public phone?: Telephone;
}
