/*
* Copyright 2021 Algorythmic, LLC

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
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
