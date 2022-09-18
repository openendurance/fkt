/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { ICoordinates } from "./ICoordinates";

/**
 * A physical location.
 */
export interface ILocation {
	/**
	 * Street address.
	 */
	address?: string;

	/**
	 * The UTM {@link ICoordinates} for this location.
	 */
	coordinates?: ICoordinates;

	/**
	 * Geohash for this location.
	 */
	geohash?: string;

	/**
	 * Location name.
	 */
	name: string;
}
