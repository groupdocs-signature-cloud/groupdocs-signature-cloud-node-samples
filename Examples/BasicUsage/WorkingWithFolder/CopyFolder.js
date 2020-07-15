"use strict";

class CopyFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.CopyFolderRequest("signaturedocs", "signaturedocs1", myStorage, myStorage);
		await folderApi.copyFolder(request);
		console.log("Expected response type is Void: 'signaturedocs' folder copied as 'signaturedocs1'.");
	}
}
module.exports = CopyFolder;
