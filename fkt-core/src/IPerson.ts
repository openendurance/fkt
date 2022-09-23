
/**
 * A human.
 */
export interface IPerson {
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
	 * URL to the person's avatar.
	 */
	photo?: URL;
}
