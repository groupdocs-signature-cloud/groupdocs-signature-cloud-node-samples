"use strict";

class GetFileVersions {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.GetFileVersionsRequest("signaturedocs/one-page.docx", myStorage);
		let response = await storageApi.getFileVersions(request);
		console.log("Expected response type is FileVersions: " + response.value.length);
	}
}
module.exports = GetFileVersions;
