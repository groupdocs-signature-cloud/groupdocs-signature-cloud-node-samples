"use strict";

class VerifyText {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedText_one-page.docx";

		let opts = new signature_cloud.VerifyTextOptions();		
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Text;
		opts.text = 'GroupDocs.Signature Cloud';
		opts.matchType = signature_cloud.VerifyBarcodeOptions.MatchTypeEnum.Contains;

		opts.page = 1;
		opts.allPages = true;

		let settings = new signature_cloud.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.VerifySignaturesRequest(settings);
		let response = await signApi.verifySignatures(request);
		console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
	}
}
module.exports = VerifyText;