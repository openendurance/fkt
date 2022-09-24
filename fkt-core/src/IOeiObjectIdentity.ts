/**
 * Domain entity identity. Defaults to string.
 */
export interface IOeiObjectIdentity<T = string> {
	/**
	 * A domain entity's unique id.
	 */
	id: T;
}
