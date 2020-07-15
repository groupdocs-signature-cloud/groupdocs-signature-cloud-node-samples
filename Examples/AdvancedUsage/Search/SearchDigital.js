"use strict";

class SearchDigital {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedDigital_sample2.pdf";

		let opts = new signature_cloud.SearchDigitalOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Digital;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);
		console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
	}
}
module.exports = SearchDigital;