/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * A run organizer.
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
