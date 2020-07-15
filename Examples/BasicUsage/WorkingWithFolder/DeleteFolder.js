"use strict";

class DeleteFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.DeleteFolderRequest("signaturedocs/signaturedocs1", myStorage, true);
		await folderApi.deleteFolder(request);
		console.log("Expected response type is Void: 'signaturedocs/signaturedocs1' folder deleted recursively.");
	}
}
module.exports = DeleteFolder;
