/**
 * Covid status for events.
 */
 export enum CovidStatus {
	/**
	 * None. Event us unrestricted.
	 */
	None = "none",

	/**
	 * Mask required.
	 */
	MaskRequired = "mask",

	/**
	 * On hold.
	 */
	OnHold = "hole",

	/**
	 * Social distancing required.
	 */
	SocialDistance = "distancing"
}
