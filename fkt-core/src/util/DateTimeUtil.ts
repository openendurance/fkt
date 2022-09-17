/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
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
