"use strict";
class Signature_Node_Search_Digital_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\signedDigital_sample2.pdf";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.SearchDigitalOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.Pdf;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Digital;

		var settings = new groupdocs_signature_cloud_1.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];


		var request = new groupdocs_signature_cloud_1.SearchSignaturesRequest(settings);
		signApi.searchSignatures(request)
			.then(function (response) {
				console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Search_Digital_Signature;