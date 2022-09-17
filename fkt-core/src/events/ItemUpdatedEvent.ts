/*
 * File: /fkt/fkt-core/src/events/RunUpdatedEvent.ts
 * Created Date: Thursday, 5th November 2020 9:57:08 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { v4 } from "uuid";
import { IOeiObject } from "#fkt-core/IOeiObject";
import { IEvent } from "./IEvent";

/**
 * Event raised when an {@link IRun} is updated in persistent storage.
 */
export class ItemUpdatedEvent<T extends IOeiObject> implements IEvent<T> {
	/** Item associated with the event. */
	public data: T;

	/** Unique event id. */
	public readonly id: string = v4();

	/** Name of the event. */
	public readonly name: string;

	/** Message timestamp. */
	public readonly timestamp: number = Date.now();

	/**
	 * Create a new instance of **ItemUpdatedEvent**.
	 *
	 * @param data Event data.
	 */
	constructor(data: T, name: string = "ItemUpdated") {
		this.data = data;
		this.name = name;
	}
}
