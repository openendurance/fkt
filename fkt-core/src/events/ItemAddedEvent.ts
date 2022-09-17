/*
 * File: /fkt/fkt-core/src/events/ItemAddedEvent.ts
 * Created Date: Friday, 20th November 2020 9:13:48 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

import { v4 } from "uuid";
import { IOeiObject } from "#fkt-core/IOeiObject";
import { IEvent } from "./IEvent";

/**
 * Event raised when an {@link IOeiObject} is added to persistent storage.
 */
export class ItemAddedEvent<T extends IOeiObject> implements IEvent<T> {
	/** Item associated with the event. */
	public data: T;

	/** Unique event id. */
	public readonly id: string = v4();

	/** Name of the event. */
	public readonly name: string;

	/** Message timestamp. */
	public readonly timestamp: number = Date.now();

	/**
	 * Create a new instance of **ItemAddedEvent**.
	 *
	 * @param data Event data.
	 */
	constructor(data: T, name: string = "ItemAdded") {
		this.data = data;
		this.name = name;
	}
}
