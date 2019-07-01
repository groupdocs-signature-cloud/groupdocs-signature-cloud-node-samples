"use strict";
class Signature_Node_Verify_Digital_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\signedDigital_sample2.pdf";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.VerifyDigitalOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.Pdf;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Digital;

		var settings = new groupdocs_signature_cloud_1.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];


		var request = new groupdocs_signature_cloud_1.VerifySignaturesRequest(settings);
		signApi.verifySignatures(request)
			.then(function (response) {
				console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Verify_Digital_Signature;