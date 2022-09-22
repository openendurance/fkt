import { OeiObjectMeta } from "OeiObjectMeta";
import { IOeiObjectIdentity } from "./IOeiObjectIdentity";

// TODO: check ctors for init in all concrete classes

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
