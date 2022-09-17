/*
 * File: /fkt/fkt-core/src/events/IEvent.ts
 * Created Date: Thursday, 5th November 2020 8:14:48 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { IOeiObject } from "#fkt-core/IOeiObject";

/**
 * An {@link IOeiObject} related event.
 */
export interface IEvent<T extends IOeiObject> {
	/** Data associated with the event. */
	data: T;

	/** Unique event id. */
	readonly id: string;

	/** Name of the event. */
	readonly name: string;

	/** Message timestamp. */
	readonly timestamp: number;
}
