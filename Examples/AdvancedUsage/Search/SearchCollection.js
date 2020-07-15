"use strict";

class SearchCollection {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedCollection_One_page.docx";

		let BarcodeOpts = new signature_cloud.SearchBarcodeOptions();
		BarcodeOpts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Barcode;
		BarcodeOpts.matchType = signature_cloud.SearchQRCodeOptions.MatchTypeEnum.Contains;
		BarcodeOpts.allPages = true;

		let Digitalopts = new signature_cloud.SearchDigitalOptions();
		Digitalopts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Digital;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [BarcodeOpts, Digitalopts];

		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);
		console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
	}
}
module.exports = SearchCollection;