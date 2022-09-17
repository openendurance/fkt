/*
 * File: /fkt/fkt-core/src/ILocation.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
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
