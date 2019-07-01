"use strict";
class Signature_Node_Move_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.MoveFolderRequest("Signaturedocs1", "Signaturedocs/Signaturedocs1", myStorage, myStorage);
		folderApi.moveFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Signaturedocs1' folder moved to 'Signaturedocs/Signaturedocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Move_Folder;
