"use strict";

class MoveFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new signature_cloud.MoveFolderRequest("signaturedocs1", "signaturedocs/signaturedocs1", myStorage, myStorage);
		await folderApi.moveFolder(request);
		console.log("Expected response type is Void: 'signaturedocs1' folder moved to 'signaturedocs/signaturedocs1'.");
	}
}
module.exports = MoveFolder;
