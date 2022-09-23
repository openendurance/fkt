/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * String prototype extensions.
 */
 interface String {
	MAIA_EPOCH: string;
	formatAsFixedEpochTimeString(): string | null;
}

/**
 * A _totally random_ synthetic epoch date.
 */
String.prototype.MAIA_EPOCH = "1982-05-05";

/**
 * Formats a time string using a pre-determined and totally made up epoch.
 *
 * @returns Formatted string or null;
 */
 String.prototype.formatAsFixedEpochTimeString = function(): string | null {
	if (this.length === 0) {
		return null;
	}

	return new Date(`${this.MAIA_EPOCH}T${this}Z`).toLocaleTimeString(undefined, {
		timeZone: "UTC",
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	});
}
