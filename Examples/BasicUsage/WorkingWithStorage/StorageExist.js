"use strict";

class StorageExist {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.StorageExistsRequest(myStorage);
		let response = await storageApi.storageExists(request);
		console.log("Expected response type is StorageExist: " + response.exists);
	}
}
module.exports = StorageExist;
