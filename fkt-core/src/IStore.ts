/*
 * File: /fkt/fkt-core/src/IStore.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { IOeiObject } from "./IOeiObject";

/**
 * A running store.
 */
export interface IStore extends IOeiObject {
	/**
	 * Email address.
	 */
	email?: string;

	/**
	 * Telephone number.
	 */
	phone?: string;
}
