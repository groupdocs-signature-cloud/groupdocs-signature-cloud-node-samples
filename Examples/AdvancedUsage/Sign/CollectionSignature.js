"use strict";

class CollectionSignature {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";

		let BarcodeOpts = new signature_cloud.SignBarcodeOptions();
		BarcodeOpts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Barcode;
		BarcodeOpts.barcodeType = 'Code39Standard';
		BarcodeOpts.text = '123456789012';
		BarcodeOpts.codeTextAlignment = signature_cloud.SignBarcodeOptions.CodeTextAlignmentEnum.None;

		// set signature position on a page
		BarcodeOpts.left = 100;
		BarcodeOpts.top = 100;
		BarcodeOpts.width = 300;
		BarcodeOpts.height = 100;
		BarcodeOpts.locationMeasureType = signature_cloud.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		BarcodeOpts.sizeMeasureType = signature_cloud.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		BarcodeOpts.stretch = signature_cloud.SignTextOptions.StretchEnum.None;
		BarcodeOpts.rotationAngle = 0;
		BarcodeOpts.horizontalAlignment = signature_cloud.SignTextOptions.HorizontalAlignmentEnum.None;
		BarcodeOpts.verticalAlignment = signature_cloud.SignTextOptions.VerticalAlignmentEnum.None;

		BarcodeOpts.margin = new signature_cloud.Padding();
		BarcodeOpts.margin.all = 5;
		BarcodeOpts.marginMeasureType = signature_cloud.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		BarcodeOpts.foreColor = new signature_cloud.Color();
		BarcodeOpts.foreColor.web = "BlueViolet";

		BarcodeOpts.backgroundColor = new signature_cloud.Color();
		BarcodeOpts.backgroundColor.web = "DarkOrange";

		BarcodeOpts.innerMargins = new signature_cloud.Padding();
		BarcodeOpts.innerMargins.all = 2;

		BarcodeOpts.page = 1;
		BarcodeOpts.allPages = false;

		let TextOpts = new signature_cloud.SignTextOptions();
		TextOpts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Text;
		TextOpts.text = 'GroupDocs.Signature Cloud';

		// set signature position on a page
		TextOpts.left = 100;
		TextOpts.top = 100;
		TextOpts.width = 100;
		TextOpts.height = 100;
		TextOpts.locationMeasureType = signature_cloud.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		TextOpts.sizeMeasureType = signature_cloud.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		TextOpts.stretch = signature_cloud.SignTextOptions.StretchEnum.None;
		TextOpts.rotationAngle = 0;
		TextOpts.horizontalAlignment = signature_cloud.SignTextOptions.HorizontalAlignmentEnum.None;
		TextOpts.verticalAlignment = signature_cloud.SignTextOptions.VerticalAlignmentEnum.None;

		TextOpts.margin = new signature_cloud.Padding();
		TextOpts.margin.all = 5;
		TextOpts.marginMeasureType = signature_cloud.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		TextOpts.font = new signature_cloud.SignatureFont();
		TextOpts.font.fontFamily = "Arial";
		TextOpts.font.fontSize = 12;
		TextOpts.font.bold = true;
		TextOpts.font.italic = false;
		TextOpts.font.underline = false;

		TextOpts.foreColor = new signature_cloud.Color();
		TextOpts.foreColor.web = "BlueViolet";

		TextOpts.backgroundColor = new signature_cloud.Color();
		TextOpts.backgroundColor.web = "DarkOrange";
		TextOpts.page = 1;
		TextOpts.allPages = false;

		let settings = new signature_cloud.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [BarcodeOpts, TextOpts];
		settings.saveOptions = new signature_cloud.SaveOptions();
		settings.saveOptions.outputFilePath = "signaturedocs/signedCollection_One_page.docx";

		let request = new signature_cloud.CreateSignaturesRequest(settings);
		let response = await signApi.createSignatures(request);
		console.log("Expected response type is SignResult: DownloadUrl = " + response.downloadUrl);
	}
}
module.exports = CollectionSignature;