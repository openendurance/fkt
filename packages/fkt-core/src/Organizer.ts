import { IPerson } from "IPerson";
import { OrganizerType } from "OrganizerType";

/**
 * An event organizer.
 */
export class Organizer implements IPerson {
	/**
	 * Email address.
	 */
	public email: string;

	/**
	 * Full name.
	 */
	public name: string;

	/**
	 * Telephone number.
	 */
	public phone?: string;

	/**
	 * URL to the Organizer's avatar.
	 */
	public photo?: URL;

	/**
	 * Organizer type, e.g. "person", "store", etc.
	 *
	 * Multiple entries indicate a co-organized event.
	 */
	public type: OrganizerType;
}
