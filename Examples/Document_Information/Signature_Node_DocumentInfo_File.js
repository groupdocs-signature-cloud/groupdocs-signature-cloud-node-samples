"use strict";
class Signature_Node_DocumentInfo_File {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\one-page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var settings = new groupdocs_signature_cloud_1.InfoSettings();
		settings.fileInfo = fileInfo;

		var request = new groupdocs_signature_cloud_1.GetInfoRequest(settings);
		infoApi.getInfo(request)
			.then(function (response) {
				console.log("Expected response type is InfoResult: " + response.fileInfo.filePath);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_DocumentInfo_File;