import { OrganizerType } from "OrganizerType";

// TODO: refactor to Person class?

/**
 * An event organizer.
 */
export interface IOrganizer {
	/**
	 * Email address.
	 */
	email: string;

	/**
	 * Full name.
	 */
	name: string;

	/**
	 * Telephone number.
	 */
	phone?: string;

	/**
	 * URL to the Organizer's avatar.
	 */
	photo?: URL;

	/**
	 * Organizer type, e.g. "person", "store", etc.
	 *
	 * Multiple entries indicate a co-organized event.
	 */
	type: OrganizerType[];
}
