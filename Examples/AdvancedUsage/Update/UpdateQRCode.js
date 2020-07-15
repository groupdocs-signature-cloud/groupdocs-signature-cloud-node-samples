"use strict";

class UpdateQRCode {
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

		// Update
		let updateOpts = new signature_cloud.UpdateOptions();
		updateOpts.signatureType = signature_cloud.UpdateOptions.SignatureTypeEnum.QRCode;
		updateOpts.signatureId = response.signatures[0].signatureId;
		updateOpts.left = 200;
		updateOpts.top = 200;
		updateOpts.width = 200;
		updateOpts.height = 200;
		updateOpts.isSignature = true;

		let updateSettings = new signature_cloud.UpdateSettings();
		updateSettings.fileInfo = fileInfo;
		updateSettings.options = [updateOpts];
		
		request = new signature_cloud.UpdateSignaturesRequest(updateSettings);
		response = await signApi.updateSignatures(request);

		console.log("Expected response type is UpdateResult : succeeded = " + response.succeeded.length + " failed = " + response.failed.length);
	}
}
module.exports = UpdateQRCode;