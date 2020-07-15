"use strict";

class MoveFile {
	static async Run() {
		let request = new signature_cloud.MoveFileRequest("signaturedocs/one-page1.docx", "signaturedocs1/one-page1.docx", myStorage, myStorage);
		await fileApi.moveFile(request);
		console.log("Expected response type is Void: 'signaturedocs/one-page1.docx' file moved to 'signaturedocs1/one-page1.docx'.");
	}
}
module.exports = MoveFile;
