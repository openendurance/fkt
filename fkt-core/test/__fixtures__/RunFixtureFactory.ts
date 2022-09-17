/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { v4 } from "uuid";
import { DateTimeUtil } from "../../src/util/DateTimeUtil";

export class RunFixtureFactory {
	public static create() {
		return {
			address: "421 E Main St, Buena Vista, CO 81211",
			clubInfo: {
				address: "421 E Main St, Buena Vista, CO 81211",
				coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
				email: "porter@grouprunfinder.com",
				id: "someid",
				name: "Porter Running Club",
				phone: "000-000-0000",
			},
			coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
			createdAt: DateTimeUtil.MAIA_EPOCH,
			days: ["wednesday"],
			difficulty: ["sexy"],
			distance: ["10K"],
			endDate: DateTimeUtil.MAIA_EPOCH,
			facebook: "http://localhost.com",
			groupSize: ["0-10"],
			id: v4(),
			instagram: "http://localhost.com",
			meetup: "http://localhost.com",
			meta: ["dogs_okay"],
			name: "Porter Run",
			notes: "Bark!",
			organizer: {
				email: "porter@grouprunfinder.com",
				name: "Porter Dog",
				phone: "000-000-0000",
				type: "person",
			},
			postRunEvent: ["food"],
			startDate: DateTimeUtil.MAIA_EPOCH,
			storeInfo: {
				address: "421 E Main St, Buena Vista, CO 81211",
				coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
				email: "porter@grouprunfinder.com",
				id: "someid",
				name: "Porter's Running Store",
				phone: "000-000-0000",
			},
			strava: "http://localhost.com",
			surface: ["trail"],
			twitter: "http://localhost.com",
			type: ["social"],
			vert: ["1-150"],
			website: "http://localhost.com",
		};
	}

	public static empty() {
		return {
			createdAt: DateTimeUtil.MAIA_EPOCH,
			days: ["monday"],
			name: "Porter Run",
			startDate: DateTimeUtil.MAIA_EPOCH,
		};
	}
}
