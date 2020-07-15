"use strict";

class GetFilesList {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.GetFilesListRequest("signaturedocs/sample.docx", myStorage);
		let response = await folderApi.getFilesList(request);
		console.log("Expected response type is FilesList: " + response.value.length);
	}
}
module.exports = GetFilesList;
