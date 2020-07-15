"use strict";

class VerifyDigital {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedDigital_sample2.pdf";

		let opts = new signature_cloud.VerifyDigitalOptions();		
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Digital;

		let settings = new signature_cloud.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.VerifySignaturesRequest(settings);
		let response = await signApi.verifySignatures(request);
		console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
	}
}
module.exports = VerifyDigital;