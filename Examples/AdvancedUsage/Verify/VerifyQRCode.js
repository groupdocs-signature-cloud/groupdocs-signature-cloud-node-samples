"use strict";

class VerifyQRCode {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedQRcodeOne_page.docx";

		let opts = new signature_cloud.VerifyQRCodeOptions();		
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.QRCode;
		opts.qRCodeType = 'Aztec';
		opts.text = 'GroupDocs.Signature Cloud';
		opts.matchType = signature_cloud.VerifyQRCodeOptions.MatchTypeEnum.Contains;
		opts.allPages = true;

		let settings = new signature_cloud.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.VerifySignaturesRequest(settings);
		let response = await signApi.verifySignatures(request);
		console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
	}
}
module.exports = VerifyQRCode;