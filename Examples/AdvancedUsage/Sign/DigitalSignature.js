"use strict";

class DigitalSignature {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/sample2.pdf";

		let opts = new signature_cloud.SignDigitalOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Digital;
		opts.imageFilePath = "signaturedocs/signature.jpg";
		opts.certificateFilePath = "signaturedocs/temp.pfx";
		opts.password = "1234567890";

		let settings = new signature_cloud.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		settings.saveOptions = new signature_cloud.SaveOptions();
		settings.saveOptions.outputFilePath = "signaturedocs/signedDigital_sample2.pdf";

		let request = new signature_cloud.CreateSignaturesRequest(settings);
		let response = await signApi.createSignatures(request);
		console.log("Expected response type is SignResult: DownloadUrl = " + response.downloadUrl);
	}
}
module.exports = DigitalSignature;