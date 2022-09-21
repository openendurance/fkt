import { ILocation } from "./geo/ILocation";

/**
 * Base FKT domain object.
 */
export interface IFktObject extends ILocation {
	/**
	 * Street address.
	 */
	address?: string;

	/**
	 * Date the record was approved for publication.
	 */
	approvedAt?: Date;

	/**
	 * User that approved the record.
	 */
	approvedBy?: string;

	/**
	 * Date the record was created.
	 */
	createdAt?: Date;

	/**
	 * User that created the record.
	 */
	createdBy?: string;

	/**
	 * Facebook URL.
	 */
	facebook?: string;

	/**
	 * Entity's persistence id.
	 */
	id?: string;

	/**
	 * Instagram URL.
	 */
	instagram?: string;

	/**
	 * Name.
	 */
	name: string;

	/**
	 * User that owns the record.
	 */
	owner?: string;

	/**
	 * Photos associated with the entity.
	 */
	photos?: string[];

	/**
	 * Record status, e.g. "approved", "pending", "rejected", etc.
	 */
	status?: string;

	/**
	 * Reason for the current status, e.g. "new".
	 */
	statusReason?: string;

	/**
	 * Twitter URL, including the handle.
	 */
	twitter?: string;

	/**
	 * Date the record was last updated.
	 */
	updatedAt?: Date;

	/**
	 * User that last updated the record.
	 */
	updatedBy?: string;

	/**
	 * Website URL.
	 */
	website?: string;
}
