"use strict";

class UpdateBarcode {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedBarcodeOne_page.docx";

		// Search
		let opts = new signature_cloud.SearchBarcodeOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Barcode;
		opts.matchType = signature_cloud.SearchBarcodeOptions.MatchTypeEnum.Contains;
		opts.allPages = true;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];
		
		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);

		console.log("signatureId = " + response.signatures[0].signatureId);

		// Update
		let updateOpts = new signature_cloud.UpdateOptions();
		updateOpts.signatureType = signature_cloud.UpdateOptions.SignatureTypeEnum.Barcode;
		updateOpts.signatureId = response.signatures[0].signatureId;
		updateOpts.left = 200;
		updateOpts.top = 200;
		updateOpts.width = 300;
		updateOpts.height = 100;
		updateOpts.isSignature = true;

		let updateSettings = new signature_cloud.UpdateSettings();
		updateSettings.fileInfo = fileInfo;
		updateSettings.options = [updateOpts];
		
		request = new signature_cloud.UpdateSignaturesRequest(updateSettings);
		response = await signApi.updateSignatures(request);

		console.log("Expected response type is UpdateResult : succeeded = " + response.succeeded.length + " failed = " + response.failed.length);
	}
}
module.exports = UpdateBarcode;