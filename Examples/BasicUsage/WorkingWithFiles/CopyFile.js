"use strict";

class CopyFile {
	static async Run() {
		let request = new signature_cloud.CopyFileRequest("signaturedocs/one-page1.docx", "signaturedocs/one-page-copied.docx");
		await fileApi.copyFile(request);
		console.log("Expected response type is Void: 'signaturedocs/one-page1.docx' file copied as 'signaturedocs/one-page-copied.docx'.");
	}
}
module.exports = CopyFile;
