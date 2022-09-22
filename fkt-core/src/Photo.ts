// TODO: extract collection type for iteration?

/**
 * A photo.
 */
export class Photo {
	/**
	 * Friendly name.
	 */
	public name: string;

	/**
	 * Description.
	 */
	public description?: string;

	/**
	 * Filename after it has been translated for storage. May be the same
	 * as original filename.
	 */
	public filename: string;

	/**
	 * Location the photo was taken.
	 */
	public location?: Location;

	/**
	 * The original filename.
	 */
	public originalFilename: string;

	/**
	 * URL of the photo.
	 */
	public path: URL;
}
