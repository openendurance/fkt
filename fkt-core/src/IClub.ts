/*
 * File: /fkt/fkt-core/src/IClub.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { IOeiObject } from "./IOeiObject";

/**
 * A running club.
 */
export interface IClub extends IOeiObject {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Telephone number.
	 */
	phone?: string;
}
