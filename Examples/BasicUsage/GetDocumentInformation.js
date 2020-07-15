"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";
		let settings = new signature_cloud.InfoSettings();
		settings.fileInfo = fileInfo;
		let request = new signature_cloud.GetInfoRequest(settings);
		let response = await infoApi.getInfo(request);
		console.log("GetDocumentInformation: PagesCount = " + response.pagesCount);
	}
}
module.exports = GetDocumentInformation;
