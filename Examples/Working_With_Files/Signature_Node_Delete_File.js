"use strict";
class Signature_Node_Delete_File {
	static Run() {
		var request = new groupdocs_signature_cloud_1.DeleteFileRequest("Signaturedocs1/one-page1.docx", myStorage);
		fileApi.deleteFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Signaturedocs1/one-page1.docx' deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Delete_File;
