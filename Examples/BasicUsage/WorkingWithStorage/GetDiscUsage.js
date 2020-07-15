"use strict";

class GetDiscUsage {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.GetDiscUsageRequest(myStorage);
		let response = await storageApi.getDiscUsage(request);
		console.log("Expected response type is DiscUsage: " + response.usedSize);
	}
}
module.exports = GetDiscUsage;
