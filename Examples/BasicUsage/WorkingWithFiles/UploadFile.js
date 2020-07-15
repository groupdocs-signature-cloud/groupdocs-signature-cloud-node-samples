"use strict";

class UploadFile {
	static async Run() {

		// Open file in IOStream from local/disc.
		let resourcesFolder = './Resources/signaturedocs/one-page.docx';
		fs.readFile(resourcesFolder, (err, fileStream) => {
			let request = new signature_cloud.UploadFileRequest("signaturedocs/one-page1.docx", fileStream, myStorage);
			fileApi.uploadFile(request)
				.then(function (response) {
					console.log("Expected response type is FilesUploadResult: " + response.uploaded.length);
				})
				.catch(function (error) {
					console.log("Error: " + error.message);
				});
		});
	}
}
module.exports = UploadFile;
