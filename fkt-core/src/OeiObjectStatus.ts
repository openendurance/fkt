/**
 * An entity's status, e.g. "approved", "pending", "rejected", etc.
 */
export enum OeiObjectStatus {
	/**
	 * The entity has been "approved", usually via persistent storage.
	 */
	Approved = "Approved",

	/**
	 * The entity is "pending", e.g. is new and has not been approved.
	 */
	Pending = "Pending",

	/**
	 * The entity has been rejected. This is essentially a "soft" delete.
	 */
	Rejected = "Rejected"
}
