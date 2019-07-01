"use strict";
class Signature_Node_Create_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.CreateFolderRequest("Signaturedocs", myStorage);
		folderApi.createFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Signaturedocs' folder created.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Create_Folder;
