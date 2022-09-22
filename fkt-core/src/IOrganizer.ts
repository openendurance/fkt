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
	photo?: string;

	/**
	 * Organizer type, e.g. "person", "store", etc.
	 */
	type?: string;
}
