"use strict";

// This example demonstrates how to get document information
class GetDocumentPreview {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";
		let settings = new signature_cloud.PreviewSettings();
		settings.fileInfo = fileInfo;
		let request = new signature_cloud.PreviewDocumentRequest(settings);
		let response = await previewApi.previewDocument(request);
		console.log("GetDocumentPreview: PagesCount = " + response.pages.length);			
	}
}
module.exports = GetDocumentPreview;
