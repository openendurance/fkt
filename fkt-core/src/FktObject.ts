import { FktObjectMeta } from "FktObjectMeta";
import { IFktObjectIdentity } from "./IFktObjectIdentity";

/**
 * Base FKT domain entity.
 */
export abstract class FktObject<T> implements IFktObjectIdentity<T> {
	/**
	 * The entity's unique id.
	 */
	public id: T;

	/**
	 * Metadata associated with this entity.
	 */
	protected meta?: FktObjectMeta;

	/**
	 * Name.
	 */
	public name: string;
}
