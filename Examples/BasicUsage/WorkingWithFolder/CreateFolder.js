"use strict";

class CreateFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.CreateFolderRequest("signaturedocs", myStorage);
		await folderApi.createFolder(request);
		console.log("Expected response type is Void: 'signaturedocs' folder created.");
	}
}
module.exports = CreateFolder;
