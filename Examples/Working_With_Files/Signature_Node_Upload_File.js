"use strict";
class Signature_Node_Upload_File {
	static Run() {

		// Open file in IOStream from local/disc.
		var resourcesFolder = './Resources/Signaturedocs/one-page.docx';
		fs.readFile(resourcesFolder, (err, fileStream) => {

			var request = new groupdocs_signature_cloud_1.UploadFileRequest("Signaturedocs/one-page1.docx", fileStream, myStorage);
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
module.exports = Signature_Node_Upload_File;
