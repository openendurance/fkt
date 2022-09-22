import { OeiObjectMeta } from "OeiObjectMeta";
import { IOeiObjectIdentity } from "./IOeiObjectIdentity";

// TODO: check optional params in all concrete classes

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
	protected meta?: OeiObjectMeta;

	/**
	 * Name.
	 */
	public name: string;
}
