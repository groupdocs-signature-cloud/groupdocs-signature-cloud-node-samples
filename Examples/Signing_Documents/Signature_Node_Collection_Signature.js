"use strict";
class Signature_Node_Collection_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\one-page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var BarcodeOpts = new groupdocs_signature_cloud_1.SignBarcodeOptions();
		BarcodeOpts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		BarcodeOpts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Barcode;
		BarcodeOpts.barcodeType = 'Code39Standard';
		BarcodeOpts.text = '123456789012';
		BarcodeOpts.codeTextAlignment = groupdocs_signature_cloud_1.SignBarcodeOptions.CodeTextAlignmentEnum.None;

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

		var TextOpts = new groupdocs_signature_cloud_1.SignTextOptions();
		TextOpts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		TextOpts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Text;
		TextOpts.text = 'GroupDocs.Signature Cloud';

		// set signature position on a page
		TextOpts.left = 100;
		TextOpts.top = 100;
		TextOpts.width = 100;
		TextOpts.height = 100;
		TextOpts.locationMeasureType = groupdocs_signature_cloud_1.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		TextOpts.sizeMeasureType = groupdocs_signature_cloud_1.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		TextOpts.stretch = groupdocs_signature_cloud_1.SignTextOptions.StretchEnum.None;
		TextOpts.rotationAngle = 0;
		TextOpts.horizontalAlignment = groupdocs_signature_cloud_1.SignTextOptions.HorizontalAlignmentEnum.None;
		TextOpts.verticalAlignment = groupdocs_signature_cloud_1.SignTextOptions.VerticalAlignmentEnum.None;

		TextOpts.margin = new groupdocs_signature_cloud_1.Padding();
		TextOpts.margin.all = 5;
		TextOpts.marginMeasureType = groupdocs_signature_cloud_1.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		TextOpts.font = new groupdocs_signature_cloud_1.SignatureFont();
		TextOpts.font.fontFamily = "Arial";
		TextOpts.font.fontSize = 12;
		TextOpts.font.bold = true;
		TextOpts.font.italic = false;
		TextOpts.font.underline = false;

		TextOpts.foreColor = new groupdocs_signature_cloud_1.Color();
		TextOpts.foreColor.web = "BlueViolet";

		TextOpts.borderColor = new groupdocs_signature_cloud_1.Color();
		TextOpts.borderColor.web = "DarkOrange";

		TextOpts.backgroundColor = new groupdocs_signature_cloud_1.Color();
		TextOpts.backgroundColor.web = "DarkOrange";
		TextOpts.borderVisiblity = true;
		TextOpts.borderDashStyle = groupdocs_signature_cloud_1.SignTextOptions.BorderDashStyleEnum.Dash;

		TextOpts.page = 1;
		TextOpts.allPages = false;

		var ps = new groupdocs_signature_cloud_1.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		TextOpts.pagesSetup = ps;

		var settings = new groupdocs_signature_cloud_1.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [BarcodeOpts, TextOpts];
		settings.saveOptions = new groupdocs_signature_cloud_1.SaveOptions();
		settings.saveOptions.outputFilePath = "Signaturedocs\\signedCollection_One_page.docx";

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
module.exports = Signature_Node_Collection_Signature;