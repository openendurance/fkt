import { v4 } from "uuid";

export const create = () => {
	return {
		address: "421 E Main St, Buena Vista, CO 81211",
		coordinates: { latitude: 38.84310337541561, longitude: -106.12797954471321 },
		createdAt: Date.now(),
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

export const empty = () => {
	return {
		name: "Porter's Running Store",
		createdAt: Date.now(),
	};
}
