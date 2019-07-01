"use strict";
class Signature_Node_Download_File {
	static Run() {
		var request = new groupdocs_signature_cloud_1.DownloadFileRequest("Signaturedocs/one-page.docx", myStorage);
		fileApi.downloadFile(request)
			.then(function (response) {
				console.log("Expected response type is Stream: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Download_File;
