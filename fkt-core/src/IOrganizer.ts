/*
 * File: /fkt/fkt-core/src/IOrganizer.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
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
