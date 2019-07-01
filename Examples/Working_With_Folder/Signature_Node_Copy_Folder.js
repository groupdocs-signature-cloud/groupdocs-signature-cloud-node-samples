"use strict";
class Signature_Node_Copy_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.CopyFolderRequest("Signaturedocs", "Signaturedocs1", myStorage, myStorage);
		folderApi.copyFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Signaturedocs' folder copied as 'Signaturedocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Copy_Folder;
