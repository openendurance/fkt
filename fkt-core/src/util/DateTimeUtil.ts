/*
 * File: /fkt/fkt-core/src/util/DateTimeUtil.ts
 * Created Date: Thursday, 22nd October 2020 9:10:16 am
 * Author: Kristopher Cargile <k@openendurance.org>
 *
 * Copyright (c) 2022 Algorythmic, LLC
 */

/**
 * Contains methods for working with dates.
 */
export class DateTimeUtil {
	private static readonly MAIA_EPOCH: string = "1982-05-05";

	/**
	 * Formats a time string using a pre-determined epoch.
	 *
	 * @param time Time.
	 *
	 * @returns Formatted string or null;
	 */
	public static tryFormatTimeString(time: string | null): string | null {
		if (!time || time === "") {
			return null;
		}

		return new Date(this.MAIA_EPOCH + "T" + time + "Z").toLocaleTimeString(undefined, {
			timeZone: "UTC",
			hour12: true,
			hour: "numeric",
			minute: "numeric",
		});
	}
}
