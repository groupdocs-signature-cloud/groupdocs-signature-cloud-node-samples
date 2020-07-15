"use strict";

class DeleteFile {
	static async Run() {
		let request = new signature_cloud.DeleteFileRequest("signaturedocs1/one-page1.docx", myStorage);
		await fileApi.deleteFile(request);
		console.log("Expected response type is Void: 'signaturedocs1/one-page1.docx' deleted.");
	}
}
module.exports = DeleteFile;
