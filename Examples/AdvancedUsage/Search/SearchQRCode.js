"use strict";

class SearchQRCode {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedQRcodeOne_page.docx";

		let opts = new signature_cloud.SearchQRCodeOptions();		
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.QRCode;		
		opts.matchType = signature_cloud.SearchQRCodeOptions.MatchTypeEnum.Contains;
		opts.page = 1;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);
		console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
	}
}
module.exports = SearchQRCode;