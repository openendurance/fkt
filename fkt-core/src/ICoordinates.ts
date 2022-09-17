/*
 * File: /fkt/fkt-core/src/ICoordinates.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

/**
 * UTM coordinates.
 */
export interface ICoordinates {
	/**
	 * Latitude.
	 */
	latitude: number;

	/**
	 * Longitude.
	 */
	longitude: number;
}
