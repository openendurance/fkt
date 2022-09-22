import { ILocation } from "./geo/ILocation";

/**
 * Base FKT domain entity.
 */
export class FktObject implements ILocation {
	/**
	 * Street address.
	 */
	public address?: string;

	/**
	 * Date the record was approved for publication.
	 */
	public approvedAt?: Date;

	/**
	 * User that approved the record.
	 */
	public approvedBy?: string;

	/**
	 * Date the record was created.
	 */
	public createdAt?: Date;

	/**
	 * User that created the record.
	 */
	public createdBy?: string;

	/**
	 * Facebook URL.
	 */
	public facebook?: string;

	/**
	 * Entity's persistence id.
	 */
	public id?: string;

	/**
	 * Instagram URL.
	 */
	public instagram?: string;

	/**
	 * Name.
	 */
	public name: string;

	/**
	 * User that owns the record.
	 */
	public owner?: string;

	/**
	 * Photos associated with the entity.
	 */
	public photos?: string[];

	/**
	 * Record status, e.g. "approved", "pending", "rejected", etc.
	 */
	public status?: string;

	/**
	 * Reason for the current status, e.g. "new".
	 */
	public statusReason?: string;

	/**
	 * Twitter URL, including the handle.
	 */
	public twitter?: string;

	/**
	 * Date the record was last updated.
	 */
	public updatedAt?: Date;

	/**
	 * User that last updated the record.
	 */
	public updatedBy?: string;

	/**
	 * Website URL.
	 */
	public website?: string;
}
