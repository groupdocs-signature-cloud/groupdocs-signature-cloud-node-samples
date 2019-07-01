"use strict";
class Signature_Node_Move_File {
	static Run() {
		var request = new groupdocs_signature_cloud_1.MoveFileRequest("Signaturedocs/one-page1.docx", "Signaturedocs1/one-page1.docx", myStorage, myStorage);
		fileApi.moveFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Signaturedocs/one-page1.docx' file moved to 'Signaturedocs1/one-page1.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Move_File;
