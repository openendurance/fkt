import { OeiObjectStatus } from "./OeiObjectStatus";

/**
 * Domain entity metadata.
 */
export abstract class OeiObjectMeta {
	/**
	 * Date the entity was approved for publication.
	 */
	protected approvedAt?: Date;

	/**
	 * User that approved the entity.
	 */
	protected approvedBy?: string;

	/**
	 * Date the entity was created.
	 */
	protected createdAt: Date;

	/**
	 * User that created the entity.
	 */
	protected createdBy: string;

	/**
	 * User that owns the entity.
	 */
	protected owner: string;

	/**
	 * Entity status, e.g. "approved", "pending", "rejected", etc.
	 */
	protected status: OeiObjectStatus;

	/**
	 * Reason for the current status, e.g. "new".
	 */
	protected statusReason?: string;

	/**
	 * Date the entity was last updated.
	 */
	protected updatedAt?: Date;

	/**
	 * User that last updated the entity.
	 */
	protected updatedBy?: string;
}
