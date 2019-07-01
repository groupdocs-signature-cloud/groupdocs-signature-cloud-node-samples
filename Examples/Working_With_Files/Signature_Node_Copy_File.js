"use strict";
class Signature_Node_Copy_File {
	static Run() {
		var request = new groupdocs_signature_cloud_1.CopyFileRequest("Signaturedocs/one-page1.docx", "Signaturedocs/one-page-copied.docx", myStorage, myStorage);
		fileApi.copyFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Signaturedocs/one-page1.docx' file copied as 'Signaturedocs/one-page-copied.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Copy_File;
