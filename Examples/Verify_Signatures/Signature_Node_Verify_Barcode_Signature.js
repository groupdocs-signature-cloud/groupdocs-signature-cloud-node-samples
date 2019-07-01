"use strict";
class Signature_Node_Verify_Barcode_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\signedBarcodeOne_page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.VerifyBarcodeOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Barcode;
		opts.barcodeType = 'Code39Standard';
		opts.text = '123456789012';
		opts.matchType = groupdocs_signature_cloud_1.VerifyBarcodeOptions.MatchTypeEnum.Contains;

		opts.page = 1;
		opts.allPages = true;

		var ps = new groupdocs_signature_cloud_1.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		opts.pagesSetup = ps;

		var settings = new groupdocs_signature_cloud_1.VerifySettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];
		
		var request = new groupdocs_signature_cloud_1.VerifySignaturesRequest(settings);
		signApi.verifySignatures(request)
			.then(function (response) {
				console.log("Expected response type is VerifyResult : IsSuccess = " + response.isSuccess);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Verify_Barcode_Signature;