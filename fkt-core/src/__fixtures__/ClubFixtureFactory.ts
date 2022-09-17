import { v4 } from "uuid";
import { MAIA_EPOCH } from ".";

export class ClubFixtureFactory {
	public static create() {
		return {
			address: "421 E Main St, Buena Vista, CO 81211",
			coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
			createdAt: MAIA_EPOCH,
			email: "porter@grouprunfinder.com",
			facebook: "http://localhost.com",
			id: v4(),
			instagram: "http://localhost.com",
			name: "Porter's Running Club",
			phone: "404-555-1212",
			twitter: "http://localhost.com",
			website: "http://localhost.com",
		};
	}

	public static empty() {
		return {
			name: "Porter's Running Club",
			createdAt: MAIA_EPOCH,
		};
	}
}
