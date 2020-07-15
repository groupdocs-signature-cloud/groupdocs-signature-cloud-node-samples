"use strict";

class DeleteQRCode {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/signedQRcodeOne_page.docx";

		// Search
		let opts = new signature_cloud.SearchQRCodeOptions();		
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.QRCode;		
		opts.matchType = signature_cloud.SearchQRCodeOptions.MatchTypeEnum.Contains;
		opts.page = 1;

		let settings = new signature_cloud.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		let request = new signature_cloud.SearchSignaturesRequest(settings);
		let response = await signApi.searchSignatures(request);

		console.log("signatureId = " + response.signatures[0].signatureId);

		// Delete
		let deleteOpts = new signature_cloud.DeleteOptions();
		deleteOpts.signatureType = signature_cloud.DeleteOptions.SignatureTypeEnum.QRCode;
		deleteOpts.signatureId = response.signatures[0].signatureId;

		let deleteSettings = new signature_cloud.DeleteSettings();
		deleteSettings.fileInfo = fileInfo;
		deleteSettings.options = [deleteOpts];
		
		request = new signature_cloud.DeleteSignaturesRequest(deleteSettings);
		response = await signApi.deleteSignatures(request);

		console.log("Expected response type is DeleteResult : succeeded = " + response.succeeded.length + " failed = " + response.failed.length);
	}
}
module.exports = DeleteQRCode;