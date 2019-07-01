"use strict";
class Signature_Node_Barcode_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\one-page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.SignBarcodeOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Barcode;
		opts.barcodeType = 'Code39Standard';
		opts.text = '123456789012';
		opts.codeTextAlignment = groupdocs_signature_cloud_1.SignBarcodeOptions.CodeTextAlignmentEnum.None;

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 300;
		opts.height = 100;
		opts.locationMeasureType = groupdocs_signature_cloud_1.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = groupdocs_signature_cloud_1.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.stretch = groupdocs_signature_cloud_1.SignTextOptions.StretchEnum.None;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = groupdocs_signature_cloud_1.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = groupdocs_signature_cloud_1.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new groupdocs_signature_cloud_1.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = groupdocs_signature_cloud_1.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		opts.foreColor = new groupdocs_signature_cloud_1.Color();
		opts.foreColor.web = "BlueViolet";

		opts.borderColor = new groupdocs_signature_cloud_1.Color();
		opts.borderColor.web = "DarkOrange";

		opts.backgroundColor = new groupdocs_signature_cloud_1.Color();
		opts.backgroundColor.web = "DarkOrange";
		opts.opacity = 0.8;

		opts.innerMargins = new groupdocs_signature_cloud_1.Padding();
		opts.innerMargins.all = 2;
		opts.borderVisiblity = true;
		opts.borderDashStyle = groupdocs_signature_cloud_1.SignTextOptions.BorderDashStyleEnum.Dash;
		opts.borderWeight = 12;

		opts.page = 1;
		opts.allPages = false;

		var ps = new groupdocs_signature_cloud_1.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		opts.pagesSetup = ps;

		var settings = new groupdocs_signature_cloud_1.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];
		settings.saveOptions = new groupdocs_signature_cloud_1.SaveOptions();
		settings.saveOptions.outputFilePath = "Signaturedocs\\signedBarcodeOne_page.docx";

		var request = new groupdocs_signature_cloud_1.CreateSignaturesRequest(settings);
		signApi.createSignatures(request)
			.then(function (response) {
				console.log("Expected response type is SignResult: FilePath = " + response.fileInfo.filePath);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Barcode_Signature;