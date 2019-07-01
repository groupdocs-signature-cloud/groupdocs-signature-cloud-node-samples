"use strict";
class Signature_Node_Get_Files_List {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.GetFilesListRequest("Signaturedocs/sample.docx", myStorage);
		folderApi.getFilesList(request)
			.then(function (response) {
				console.log("Expected response type is FilesList: " + response.value.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Get_Files_List;
