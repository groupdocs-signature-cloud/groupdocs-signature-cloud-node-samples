"use strict";
class Signature_Node_Digital_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\sample2.pdf";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.SignDigitalOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.pdf;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Digital;
		opts.imageGuid = "Signaturedocs\\signature.jpg";
		opts.certificateGuid = "Signaturedocs\\temp.pfx";
		opts.password = "1234567890";

		var settings = new groupdocs_signature_cloud_1.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		settings.saveOptions = new groupdocs_signature_cloud_1.SaveOptions();
		settings.saveOptions.outputFilePath = "Signaturedocs\\signedDigital_sample2.pdf";

		var request = new groupdocs_signature_cloud_1.CreateSignaturesRequest(settings);
		signApi.createSignatures(request)
			.then(function (response) {
				console.log("Expected response type is SignResult: FilePath = " + response.fileInfo.filePath);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Digital_Signature;