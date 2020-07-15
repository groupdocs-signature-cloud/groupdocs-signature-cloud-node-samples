"use strict";

class SearchBarcode {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedBarcodeOne_page.docx";

		let opts = new signature_cloud.SearchBarcodeOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Barcode;
		opts.matchType = signature_cloud.SearchBarcodeOptions.MatchTypeEnum.Contains;
		opts.allPages = true;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];
		
		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);
		console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
	}
}
module.exports = SearchBarcode;