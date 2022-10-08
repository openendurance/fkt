import { OeiObjectMeta } from "OeiObjectMeta";
import { IOeiObjectIdentity } from "./IOeiObjectIdentity";

/**
 * Base FKT domain entity.
 */
export abstract class OeiObject<T> implements IOeiObjectIdentity<T> {
	/**
	 * The entity's unique id.
	 */
	public id: T;

	/**
	 * Metadata associated with this entity.
	 */
	protected objectMeta?: OeiObjectMeta;

	/**
	 * Name.
	 */
	public name: string;
}
