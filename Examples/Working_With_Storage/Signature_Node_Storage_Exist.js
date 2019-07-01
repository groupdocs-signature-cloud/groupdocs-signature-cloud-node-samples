"use strict";
class Signature_Node_Storage_Exist {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_signature_cloud_1.StorageExistsRequest(myStorage);
		storageApi.storageExists(request)
			.then(function (response) {
				console.log("Expected response type is StorageExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Storage_Exist;
