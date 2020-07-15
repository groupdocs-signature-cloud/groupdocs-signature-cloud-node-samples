"use strict";

class VerifyCollection {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedCollection_One_page.docx";

		let BarcodeOpts = new signature_cloud.VerifyBarcodeOptions();		
		BarcodeOpts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Barcode;
		BarcodeOpts.barcodeType = 'Code39Standard';
		BarcodeOpts.text = '123456789012';
		BarcodeOpts.codeTextAlignment = signature_cloud.SignBarcodeOptions.CodeTextAlignmentEnum.None;
		BarcodeOpts.matchType = signature_cloud.VerifyQRCodeOptions.MatchTypeEnum.Contains;
		BarcodeOpts.page = 1;		

		let Digitalopts = new signature_cloud.VerifyDigitalOptions();		
		Digitalopts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Digital;

		let settings = new signature_cloud.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [BarcodeOpts, Digitalopts];

		let request = new signature_cloud.VerifySignaturesRequest(settings);
		let response = await signApi.verifySignatures(request);
		console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
	}
}
module.exports = VerifyCollection;