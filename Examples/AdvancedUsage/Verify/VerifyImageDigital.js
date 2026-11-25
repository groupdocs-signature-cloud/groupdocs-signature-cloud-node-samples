"use strict";

class VerifyImageDigital {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedImageDigital_sample2.pdf";

		let opts = new signature_cloud.VerifyImageDigitalOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.ImageDigital;
		opts.password = "1234567890";
		opts.detectionThresholdPercent = 80;

		let settings = new signature_cloud.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.VerifySignaturesRequest(settings);
		let response = await signApi.verifySignatures(request);
		console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
	}
}
module.exports = VerifyImageDigital;
