"use strict";

class DeleteBarcode {
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

		// Delete
		let deleteOpts = new signature_cloud.DeleteOptions();
		deleteOpts.signatureType = signature_cloud.DeleteOptions.SignatureTypeEnum.Barcode;
		deleteOpts.signatureId = response.signatures[0].signatureId;

		let deleteSettings = new signature_cloud.DeleteSettings();
		deleteSettings.fileInfo = fileInfo;
		deleteSettings.options = [deleteOpts];
		
		request = new signature_cloud.DeleteSignaturesRequest(deleteSettings);
		response = await signApi.deleteSignatures(request);

		console.log("Expected response type is DeleteResult : succeeded = " + response.succeeded.length + " failed = " + response.failed.length);
	}
}
module.exports = DeleteBarcode;