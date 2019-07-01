"use strict";
class Signature_Node_Search_Collection_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\signedCollection_One_page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var BarcodeOpts = new groupdocs_signature_cloud_1.SearchBarcodeOptions();
		BarcodeOpts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		BarcodeOpts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Barcode;
		BarcodeOpts.barcodeType = 'Code39Standard';
		BarcodeOpts.text = '123456789012';
		BarcodeOpts.codeTextAlignment = groupdocs_signature_cloud_1.SignBarcodeOptions.CodeTextAlignmentEnum.None;
		BarcodeOpts.matchType = groupdocs_signature_cloud_1.SearchQRCodeOptions.MatchTypeEnum.Contains;

		// set signature position on a page
		BarcodeOpts.left = 100;
		BarcodeOpts.top = 100;
		BarcodeOpts.width = 300;
		BarcodeOpts.height = 100;
		BarcodeOpts.locationMeasureType = groupdocs_signature_cloud_1.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		BarcodeOpts.sizeMeasureType = groupdocs_signature_cloud_1.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		BarcodeOpts.stretch = groupdocs_signature_cloud_1.SignTextOptions.StretchEnum.None;
		BarcodeOpts.rotationAngle = 0;
		BarcodeOpts.horizontalAlignment = groupdocs_signature_cloud_1.SignTextOptions.HorizontalAlignmentEnum.None;
		BarcodeOpts.verticalAlignment = groupdocs_signature_cloud_1.SignTextOptions.VerticalAlignmentEnum.None;

		BarcodeOpts.margin = new groupdocs_signature_cloud_1.Padding();
		BarcodeOpts.margin.all = 5;
		BarcodeOpts.marginMeasureType = groupdocs_signature_cloud_1.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		BarcodeOpts.foreColor = new groupdocs_signature_cloud_1.Color();
		BarcodeOpts.foreColor.web = "BlueViolet";

		BarcodeOpts.borderColor = new groupdocs_signature_cloud_1.Color();
		BarcodeOpts.borderColor.web = "DarkOrange";

		BarcodeOpts.backgroundColor = new groupdocs_signature_cloud_1.Color();
		BarcodeOpts.backgroundColor.web = "DarkOrange";
		BarcodeOpts.opacity = 0.8;

		BarcodeOpts.innerMargins = new groupdocs_signature_cloud_1.Padding();
		BarcodeOpts.innerMargins.all = 2;
		BarcodeOpts.borderVisiblity = true;
		BarcodeOpts.borderDashStyle = groupdocs_signature_cloud_1.SignTextOptions.BorderDashStyleEnum.Dash;
		BarcodeOpts.borderWeight = 12;

		BarcodeOpts.page = 1;
		BarcodeOpts.allPages = false;

		var ps = new groupdocs_signature_cloud_1.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		BarcodeOpts.pagesSetup = ps;

		var Digitalopts = new groupdocs_signature_cloud_1.SearchDigitalOptions();
		Digitalopts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		Digitalopts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Digital;

		var settings = new groupdocs_signature_cloud_1.SearchSettings();
		settings.fileInfo = fileInfo;
		settings.options = [BarcodeOpts, Digitalopts];

		var request = new groupdocs_signature_cloud_1.SearchSignaturesRequest(settings);
		signApi.searchSignatures(request)
			.then(function (response) {
				console.log("Expected response type is SearchResult : Length = " + response.signatures.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Search_Collection_Signature;