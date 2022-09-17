/*
 * Copyright 2020 Algorythmic, LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { v4 } from "uuid";
import { DateTimeUtil } from "../../src/util/DateTimeUtil";

export class StoreFixtureFactory {
	public static create() {
		return {
			address: "421 E Main St, Buena Vista, CO 81211",
			coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
			createdAt: DateTimeUtil.MAIA_EPOCH,
			email: "porter@grouprunfinder.com",
			facebook: "http://localhost.com",
			id: v4(),
			instagram: "http://localhost.com",
			name: "Porter's Running Store",
			phone: "404-555-1212",
			twitter: "http://localhost.com",
			website: "http://localhost.com",
		};
	}

	public static empty() {
		return {
			name: "Porter's Running Store",
			createdAt: DateTimeUtil.MAIA_EPOCH,
		};
	}
}
