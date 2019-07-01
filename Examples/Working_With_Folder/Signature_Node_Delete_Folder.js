"use strict";
class Signature_Node_Delete_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.DeleteFolderRequest("Signaturedocs/Signaturedocs1", myStorage, true);
		folderApi.deleteFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Signaturedocs/Signaturedocs1' folder deleted recursively.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Delete_Folder;
